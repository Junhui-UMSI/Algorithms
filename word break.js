var wordBreak = function(s, wordDict) {
    var hasFound = [],
        len = s.length,
        i,
        j;
    
    hasFound[0] = true;
    
    for (i = 1; i <= len; i++) {
        for (j = 0; j < i; j++) {
            if (hasFound[j] && wordDict.includes(s.substring(j, i))) {
                hasFound[i] = true;
                break;
            }
        }
    }
    
    return hasFound[len] === true;
};
