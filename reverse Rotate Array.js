var rotate = function(nums, k) {
     k%=nums.length;
    var reverse = function(start,end){
        while(start<end){
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    reverse(0,nums.length-1);
    reverse(0,k-1);
    reverse(k,nums.length-1);
};
