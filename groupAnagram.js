var groupAnagrams = function(strs) {
    var anagramdict = {};
    for(var i= 0; i< strs.length; i++){
        var sortword = strs[i].split("").sort().join('');
        console.log(sortword);
        if(anagramdict.hasOwnProperty(sortword) === false){
            anagramdict[sortword] = [strs[i]];
        }
        else{
            anagramdict[sortword].push(strs[i]);
        }
    }
    output = [];
    for(var key in anagramdict){
         output.push(anagramdict[key]);
     }
    return output;
};
