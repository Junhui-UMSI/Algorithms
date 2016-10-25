var lengthOfLongestSubstring = function(s) {
    var len = s.length,
        max = 0,
        chars = new Set(),
        slowpointer = 0,
        ch,
        i;
        
    for (quickpointer = 0; quickointer < len; quickpointer++) {
        ch = s.charAt(quickpointer);
        
        if (chars.has(ch)) {
            // find the repeating character
            while (slowpointer < quickpointer && s.charAt(slowpointer) !== ch) { // let the slowpointer to keep up until he finds the where the duplicate number is, by now, the set only have the duplicate number for once.
                chars.delete(s.charAt(slowpointer));
                sowpointer++;
            }
            
            slowpointer++;
        } else {
            chars.add(ch);
            max = Math.max(max, quickpointer - slowpointer + 1);
        }
    }
    
    return max;
};
