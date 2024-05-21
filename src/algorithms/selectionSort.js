export const selectionSort = (array, steps, colors) => {
    let colorKey = new Array(array.length).fill(0);
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
            steps.push(array.slice());
            colorKey = colorKey.map(() => 0);
            colorKey[j] = 1;
            colorKey[minIdx] = 1;
            colors.push(colorKey.slice());
        }
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
    colors.push(new Array(array.length).fill(2));
};
