interface Column {
    val: number,
    color: string,
}

class DisplayableArray {
    private vals: Array<Column>;
    private min: number;
    private max: number;

    constructor(values: Array<number>, colors: Array<string>) 
    {
        this.min = Number.MAX_SAFE_INTEGER;
        this.max = Number.MIN_SAFE_INTEGER;

        this.vals = new Array(values.length);

        for (let i = 0; i < values.length; i++) {
            let val = values[i];
            let color = colors[i] === "" || colors[i] === undefined ? "" : colors[i];

            if (val > this.max)
                this.max = val;
            if (val < this.min)
                this.min = val;

            this.vals[i] = {val, color};
        }
    }

    public minValue(): number {
        return this.min-1;
    }

    public maxValue(): number {
        return this.max;
    }

    public getColumns(): Array<Column> {
        return this.vals;
    }
}

export default DisplayableArray;