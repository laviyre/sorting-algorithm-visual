function bubbleSort(values: Array<any>) {
    for (let i = values.length; i > 0; i--) {
        for (let j = 1; j < i; j++) {
            if (values[j] < values[j-1])
                swap(values, j, j-1);
        }
    }

    return values;
}

function swap(values: Array<any>, i: number, j: number) {
    let temp = values[i];
    values[i] = values[j];
    values[j] = temp;
}

export {bubbleSort};