abstract class DetailsManager {
    abstract access(i: number): void;
    abstract compare(i: number, j: number): void;
    abstract getColors(): Array<string>;
}

class EmptyDetails extends DetailsManager {
    access(i: number): void {};
    compare(i: number, j: number): void {};
    getColors(): Array<string> {return new Array(0)};
}

export {DetailsManager, EmptyDetails};