function majorityElement(nums: number[]): number {
    const data = [...new Set(nums)];

    let result = 0
    let count = 0
    
    for(const a of data){
        const dataCount = nums.filter((el)=> el === a)
        if(count <= dataCount.length){
            result = a
            count = dataCount.length
        }

    } 

    return result


    
};