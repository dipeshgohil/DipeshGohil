

var testArray = [1, [2, 3]];

Array.prototype.getLength = function () {
    function getMultiLength(array) {
        var sum = 0;
        for (var count = 0; count < array.length; count++) {
            if (Array.isArray(array[count])) {
                sum += getMultiLength(array[count]);
            } else {
                sum++;
            }
        }
        return sum;
    }

    return getMultiLength(this.valueOf());
};

document.write("the length of non nested item is", testArray.getLength())
document.write("<br>the length of nested item is ", testArray.length)

