var wordBreak = function(s, wordDict) {
    if(wordDict === null || wordDict.size === 0) {
        return false;
    }
  
    var possible = [];
    possible[0] = true;
    
    for(var i = 0; i < s.length; i++) {
        if(possible[i]) {
            for(var j = i + 1; j <= s.length; j++) {
                var str = s.substring(i, j);
                if(wordDict.has(str)) {
                    possible[j] = true;
                }
            }
        }
    }
    
    return possible[s.length] === true;
};
