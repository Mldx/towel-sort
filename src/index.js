// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix !== undefined) {
        for (let i = 1; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                matrix[i] = matrix[i].sort((a, b) => b - a)
            }
        }
        return matrix.flat()
    }
    return [];
}



