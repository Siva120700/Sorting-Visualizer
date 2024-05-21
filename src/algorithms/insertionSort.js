export const insertionSort = (array, steps, colors) => {
    const colorKey = colors[colors.length - 1].slice();

    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            j--;
            steps.push(array.slice());
            colorKey.fill(0);
            colorKey[j] = 1;
            colorKey[j + 1] = 1;
            colors.push(colorKey.slice());
        }
    }

    // Final step to set all bars to sorted color
    colors.push(new Array(array.length).fill(2));
};
