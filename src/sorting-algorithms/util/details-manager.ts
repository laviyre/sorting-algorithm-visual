import { SortableArray } from "../sortable-array";
import SoundManager from "./sound-manager";

abstract class DetailsManager {
    abstract access(i: number): void;
    abstract compare(i: number, j: number): void;
    abstract getColors(): Array<string>;
}

class EmptyDetails extends DetailsManager {
    async access(i: number): Promise<void> {};
    async compare(i: number, j: number): Promise<void> {};
    getColors(): Array<string> {return new Array(0)};
}

class DefaultDetails extends DetailsManager {
    private readonly rate: number = 1000; // How many milliseconds per operation at speed 1
    private readonly minDelay: number = 50; // Smallest possible gap between for visual updates
    private operationIncrement: number = 500; // ms equivalent of an operation.
    private progress: number = 0; // Represents progress to next frame
    private arr: SortableArray | null;
    
    private colors: Array<string>;

    private updateParent: Function;

    /**
     * 
     * @param speed Speed of updates
     * @param size Size of Array
     */
    constructor(speed: number, size: number) {
        super();

        this.setSpeed(speed);

        this.colors = new Array(size).fill("");
        this.updateParent = () => {}; //Empty call to define function
        this.arr = null;
    }

    assignArray(arr: SortableArray): void {
        this.arr = arr;
    }
    
    async access(i: number): Promise<void> {
        this.colors[i] = "red";
        this.addValue(i);

        await this.update();
    }

    private addValue(i: number): void {
        if (this.arr == null) return;
        SoundManager.addValue(this.arr.getValues()[i]);
    }

    async compare(i: number, j: number): Promise<void> {
        this.colors[i] = "green";
        this.colors[j] = "green";
        this.addValue(i);
        this.addValue(j);
        await this.update();
    }

    async update(): Promise<void> {

        this.progress += this.operationIncrement;

        if (this.progress >= this.minDelay) {
            this.progress %= this.minDelay;
            let duration = Math.max(this.operationIncrement, this.minDelay);
            await this.pause(duration);
            SoundManager.makeSound(duration);
            this.updateParent();
            this.resetColours();
        }
    }

    private pause(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getColors(): string[] {
        return this.colors;
    }

    resetColours() {
        this.colors = Array(this.colors.length).fill("");
    }

    /**
     * Note that this function must be called because otherwise the displayed array
     * will be associated with the previously defined array
     */
    setUpdateParent(updateParent: Function) {
        this.updateParent = updateParent;
    }

    setSpeed(speed: number) {
        this.operationIncrement = this.rate / speed;
    }
}

export {DetailsManager, EmptyDetails, DefaultDetails};