/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
    var p1 = 0, p2 = 0;
    var result = [];
    while (p1 < A.length && p2 < B.length) {
        let intersection  = calculateIntersection(A[p1], B[p2]);
        if (intersection !== null) {
            result.push(intersection);
        }

        if (A[p1][1] < B[p2][1]) {
            p1++
        } else {
            p2++
        }
    }
    return result;

};

function calculateIntersection(interval1, interval2) {

    if (interval1[0] > interval2[1]) {
        return null;
    }
    if (interval2[0] > interval1[1]) {
        return null;
    }
    var start = interval1[0] > interval2[0] ? interval1[0] : interval2[0];
    var end = interval1[1] < interval2[1] ? interval1[1] : interval2[1];
    return [start, end];
}


intervalIntersection(  [[0,2],[5,10],[13,23],[24,25]],  [[1,5],[8,12],[15,24],[25,26]])