var containsDuplicate = function(nums) {
    var hashmap = [];
    for(var i = 0; i< nums.length; i++){
        if(hashmap.hasOwnProperty(nums[i])){
            return true;
        }
        else{
            hashmap[nums[i]] = i;
        }
    }
    return false;
};
