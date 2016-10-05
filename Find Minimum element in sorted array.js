var findMin = function(nums) {
    if(nums == null || nums.length == 0){
        return -1;
    }
    var start = 0, end = nums.length -1;
    target = nums[nums.length-1];
    while(start+1 < end){
        var mid = parseInt(start + (end-start)/2);
        if(nums[mid]<=target){
            end = mid;
        }
        else{
            start = mid;
        }
    }
        if(nums[start]<= target){
            return nums[start]
        }
        else{
            return nums[end]
      }
};
