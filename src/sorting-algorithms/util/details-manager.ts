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
    private readonly rate: number = 500; // How many milliseconds per operation at speed 1
    private readonly minDelay: number = 50; // Smallest possible gap between for visual updates
    private operationIncrement: number; // ms equivalent of an operation.
    private progress: number = 0; // Represents progress to next frame


    
    private comparisons: number;
    private arrayAccesses: number;
    
    private colors: Array<string>;

    constructor(speed: number, size: number) {
        super();

        this.comparisons = 0;
        this.arrayAccesses = 0;
        this.operationIncrement = this.rate / speed;
        this.colors = Array(size).fill("");
    }
    
    async access(i: number): Promise<void> {
        this.arrayAccesses++;
        this.colors[i] = "red";
    }

    async compare(i: number, j: number): Promise<void> {
        this.comparisons++;
        this.colors[i] = "green";
        this.colors[j] = "green";
    }

    async update() {
        this.progress += this.operationIncrement;

        if (this.progress >= this.minDelay) {
            this.progress %= this.minDelay;
            await this.pause(Math.max(this.operationIncrement, this.minDelay));
        }
    }

    private pause(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getColors(): string[] {
        return new Array(0);
    }

    private resetColours() {
        this.colors = Array(this.colors.length).fill("");
    }
}

export {DetailsManager, EmptyDetails, DefaultDetails};