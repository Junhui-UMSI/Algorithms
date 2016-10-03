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


#####Two Sum II

var twoSum = function(numbers, target) {
    returnarr = [];
    left = 0;
    right = numbers.length -1;
    while(left<right){
        sum = numbers[left]+ numbers[right];
        if(sum === target){
            returnarr[0] = left+1;
            returnarr[1] = right+1;
            return returnarr;
        }
        else if(sum < target){
            left++;
        }
        else{
            right--;
        }
    }
        return returnarr;
    
};
