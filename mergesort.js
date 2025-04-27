function mergesort(array, s, e) {
    if (s < e) {
        let mid = Math.floor((s + e) / 2);
        mergesort(array, s, mid);
        mergesort(array, mid + 1, e);
        merge(array, s, mid, e);
    }
}

function merge(array, s, mid, e) {
    let firsthalf = [];
    let secondhalf = [];

    // Correct way to copy elements
    for (let i = s; i <= mid; i++) {
        firsthalf.push(array[i]);
    }
    for (let i = mid + 1; i <= e; i++) {
        secondhalf.push(array[i]);
    }

    let i = 0, j = 0, k = s;

    // Correct while condition
    while (i < firsthalf.length && j < secondhalf.length) {
        if (firsthalf[i] < secondhalf[j]) {
            array[k++] = firsthalf[i++];
        } else {
            array[k++] = secondhalf[j++];
        }
    }

    while (i < firsthalf.length) {
        array[k++] = firsthalf[i++];
    }

    while (j < secondhalf.length) {
        array[k++] = secondhalf[j++];
    }
}

const array = [3, 2, 1, 13, 8, 5, 0, 1];
mergesort(array, 0, array.length - 1);
console.log(array);
