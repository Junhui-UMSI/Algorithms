var twoSum = function(nums, target) {
    var hashmap = [];
    
    for (var i = 0;i < nums.length;i++)
    {
        var complement = target - nums[i];
        if (hashmap.hasOwnProperty(complement) && hashmap[complement] != i)
        {
            return [hashmap[complement],i];
        }
       hashmap[nums[i]] = i;

    }
};
