/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    // brute force soln
    // return bruteForce(words, queries)
    return optimal(words, queries)
};

const optimal = (words, queries) => {
    let n = words.length;
    let Prefix = new Array(n + 1).fill(0);
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < n; i++) {
        Prefix[i + 1] = Prefix[i];
        if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
            Prefix[i + 1]++;
        }
    }

    let result = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        result[i] = Prefix[queries[i][1] + 1] - Prefix[queries[i][0]];
    }

    return result;
}

const bruteForce = (words, queries) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let index= 0; index< words.length; index++) {
        const word = words[index]
        if (vowels.includes(word[0]) && vowels.includes(word[word.length-1])) {
            words[index]= true
        } else {
            words[index] = false
        }
    }

    console.log(words)

    const response = []
    for (let index=0; index<queries.length; index++) {
        const query = queries[index]
        const ans = words.filter((item, index) => 
            index>=query[0] && index<=query[1] && item === true
        )
        response.push(ans.length)
    }
    return response
}