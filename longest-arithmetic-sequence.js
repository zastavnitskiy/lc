/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    
    let longest = 0;
    function subSeqLen(A, firstI, secondI) {
        // console.log('length', A[firstI], A[secondI])
        const increment = A[secondI] - A[firstI];
        // console.log('increment', increment)
        let l = 1;
        
        let prev = firstI, i = secondI - firstI;
        
        // console.log(prev, i)
        
        while((prev + i)  < A.length) {
            // console.log('c',A[prev + i], A[prev], A[prev + i] - A[prev])
            if ((A[prev + i] - A[prev]) === increment) {
                // console.log('increase')
                l++;
                prev = prev + i;
                i = 1;
            } else {
                i++;
            }
        }
        
        return l;
    }
    
    // console.log(subSeqLen([1,2,3], 0, 1), 3)
    // console.log(subSeqLen([1,2,3,4], 1, 2), 3)
    // console.log(subSeqLen([9,4,7,2,10], 1, 2), 3)
    
    for (let i = 0; i<A.length - 1; i++) {
        for (let k = i+1; k<A.length; k++) {
            // console.log('leg', i, k)
            longest = Math.max(longest, subSeqLen(A, i, k))
        }
    }
    
    return longest
    
};




