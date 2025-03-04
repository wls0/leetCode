function twoSum(nums: number[], target: number): number[] {

    //target에서  - 하고 -한 값을 뺸 나머지를 돌려본다 그리고 0이 되면 출력

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