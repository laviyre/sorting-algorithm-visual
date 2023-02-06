const ShuffleManager = (() => {
    function shuffle(vals: Array<any>, mode: string = "Normal"): Array<any> {
        switch(mode) {
            case "Weak": 
                return weakShuffle(vals);
            case "Normal": default:
                return normalShuffle(vals);
        }
    }

    function normalShuffle(vals: Array<any>): Array<any> {
        let newVals = vals.filter(i => true);
        for (let i = newVals.length-1; i > 0; i--)
            swap(i, Math.floor(Math.random()*i), newVals);

        return newVals;
    }

    function weakShuffle(vals: Array<any>): Array<any> {
        let newVals = vals.filter(i => true);

        for (let i = 0; i < vals.length; i++) {
            swap(i, i+Math.min(Math.max(0, Math.floor((2*Math.random()-1)*Math.sqrt(vals.length))), vals.length-1-i),newVals);
        }

        return newVals;
    }

    function swap(i: number, j: number, vals: Array<any>): void {
        let temp = vals[i];
        vals[i] = vals[j];
        vals[j] = temp;
    }

    return {shuffle};
})();

export default ShuffleManager;