const SoundManager = (() => {
    let context: AudioContext;
    let minVal: number = 1, maxVal: number = 1;
    let minFreq: number = 150, maxFreq: number = 1500;
    let vals: Array<number> = [];
    let currVolume: GainNode | null;
    
    const expDecayTime: number = 0.01;

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

    // This removes artifacts from the sound
    const freqTime = (ms: number, freq: number) => {
        return Math.ceil(ms/1000 * freq + expDecayTime) / freq * 1000;
    }

    const makeSound = (ms: number) => {
        let geo = geoMean();
        createSound(geo, freqTime(ms,geo));
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
        if (currVolume != null)
        {
            currVolume.gain.exponentialRampToValueAtTime(0.001, context.currentTime + expDecayTime);
            console.log("cool");
        }

        let sound = new OscillatorNode(context, {
            frequency: frequency,
            type: "triangle",
        })
        
        currVolume = context.createGain();
        currVolume.gain.value = 0.1;
        sound.connect(currVolume);
        currVolume.connect(context.destination);
        sound.start(context.currentTime);
        sound.stop(context.currentTime + ms/1000);
    }

    return {start, makeSound, addValue};
})();

export default SoundManager;