const SoundManager = (() => {
    let context: AudioContext;
    let minVal: number = 1, maxVal: number = 1;
    let minFreq: number = 150, maxFreq: number = 1500;
    let vals: Array<number> = [];
    
    let currVolume: GainNode | null;
    let currSound: OscillatorNode | null;

    const start = (minimum: number, maximum: number) => {
        context = new AudioContext();
        minVal = minimum;
        maxVal = maximum;
    }

    const addValue = (val: number) => {
        let diffProp = (val - minVal) / (maxVal - minVal);
        let freq = Math.pow(minFreq, 1 - diffProp) * Math.pow(maxFreq, diffProp);
        vals.push(freq);
    }

    const makeSound = (ms: number) => {
        let geo = geoMean();
        createSound(geo, ms);
        vals = [];
    }

    const geoMean = () => {
        let ans = 1;

        for (let pow = 1; pow <= vals.length; pow++) {
            ans = Math.pow(ans, 1 - 1/pow) * Math.pow(vals[pow-1], 1/pow);
        }

        return ans;
    }

    const createSound = (frequency: number, ms: number) => {
        if (currSound == null) {

            currSound = new OscillatorNode(context, {
                frequency: frequency,
                type: "triangle",
            })
            
            currVolume = context.createGain();
            currVolume.gain.value = 0.1;
            currSound.connect(currVolume);
            currVolume.connect(context.destination);
            currSound.start(context.currentTime);
        } else {
            currSound.frequency.setValueAtTime(frequency, context.currentTime);
        }
    }

    const endSound = () => {
        if (currVolume != null) currVolume.gain.value = 0;
        currVolume = null;
        if (currSound != null) currSound.stop(context.currentTime);
        currSound = null;
    }

    return {start, makeSound, addValue, endSound};
})();

export default SoundManager;