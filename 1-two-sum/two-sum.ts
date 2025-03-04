function twoSum(nums: number[], target: number): number[] {
    let index = 0;
    
    for(const a of nums){
        const targetData = target - a;

        for(let b = 0; b <= nums.length; b++){
            if(b === index){
                continue;
            }
            if(targetData - nums[b] === 0){
                return [index, b]
            }
            
        }

        index++
    }
    
};