function searchInsert(nums: number[], target: number): number {
    let index = 0
    for(const a of nums){
        if(a === target){
            return index
        }

        if(a > target){
            return index
        }

        if(index === nums.length -1){
            return nums.length
        }

        index++
    }
    
};