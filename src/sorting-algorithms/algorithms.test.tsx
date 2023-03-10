import asyncSortingAlgorithms from "./algorithms";
import { SortingAlgorithmAsync } from "./algorithms/sorting-algorithm";
import { SortableArrayFactory } from "./sortable-array";


describe("Test sorting algorithms correctly sort", () => {
    // Test cases in form of input, correct output
    const sortingAlgorithmInOrder = [
        {input: [1,5,3], output: [1,3,5]}, 
        {input: [1,5,3,2,0,4,6], output: [0,1,2,3,4,5,6]},
        {input: [1,5,9,13,17], output: [1,5,9,13,17]},
        {input: [5,4,3,2,1], output: [1,2,3,4,5]},
        {input: [], output: []},
        {input: [1], output: [1]},
        {input: [-1798319505, 2147483647, -878402925, -2147483648, -1183362834, -1962176217, -1153895187],
        output: [-2147483648, -1962176217, -1798319505, -1183362834, -1153895187, -878402925, 2147483647]}
    ]

    asyncSortingAlgorithms.forEach(algorithm => sortingAlgorithmTest(algorithm));

    async function sortingAlgorithmTest(algorithm: SortingAlgorithmAsync) {

        test(`${algorithm.getName()}`, () => {
            sortingAlgorithmInOrder.forEach(async sortTest => {
                expect(await algorithm.sort(SortableArrayFactory.createTimelessArray(sortTest.input))).toEqual(sortTest.output);
            })
        })
}
})
