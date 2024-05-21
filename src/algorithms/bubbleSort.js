export const bubbleSort = (array, steps, colors) => {
    let colorKey = new Array(array.length).fill(0);
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
            steps.push(array.slice());
            colorKey = colorKey.map(() => 0);
            colorKey[j] = 1;
            colorKey[j + 1] = 1;
            colors.push(colorKey.slice());
        }
    }
    colors.push(new Array(array.length).fill(2));
};
