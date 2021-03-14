// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    } else {
        return matrix.reduce(function (res, array, index) {
            if (index % 2 == 0) {
                res = res.concat(array);
            } else {
                res = res.concat(array.reverse());
            }
            return res;
        }, []);
    }
};
