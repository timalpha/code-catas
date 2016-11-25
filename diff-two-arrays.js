function diffArray(arr1, arr2) {

    var filtered = arr1.concat(arr2)

    function isInArrays((x) {
        if (arr1.indexOf(x) === -1 || arr2.indexOf(x) === -1) {
            return x;
        }
    }

    return filtered.filter(isInArrays);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);