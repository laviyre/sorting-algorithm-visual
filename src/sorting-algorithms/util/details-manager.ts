abstract class DetailsManager {
    abstract access(i: number): void;
    abstract compare(i: number, j: number): void;
}

class EmptyDetails extends DetailsManager {
    access(i: number): void {};
    compare(i: number, j: number): void {};
}

export {DetailsManager, EmptyDetails};