export const mergeSort = (array, steps, colors) => {
    const colorKey = new Array(array.length).fill(0);

    const merge = (left, right) => {
        let sorted = [], leftIndex = 0, rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                sorted.push(left[leftIndex++]);
            } else {
                sorted.push(right[rightIndex++]);
            }
        }
        return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    };

    const mergeSortHelper = (array, start, end) => {
        if (end - start <= 1) return array.slice(start, end);
        const mid = Math.floor((start + end) / 2);
        const left = mergeSortHelper(array, start, mid);
        const right = mergeSortHelper(array, mid, end);

        const sorted = merge(left, right);
        for (let i = start; i < end; i++) {
            array[i] = sorted[i - start];
            steps.push(array.slice());
            colorKey.fill(0);
            for (let j = start; j < end; j++) colorKey[j] = 1;
            colors.push(colorKey.slice());
        }

        return array.slice(start, end);
    };

    mergeSortHelper(array, 0, array.length);

    // Final step to set all bars to sorted color
    colors.push(new Array(array.length).fill(2));
};
