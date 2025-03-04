function singleNumber(nums: number[]): number {
    const set = [...new Set(nums)];
    const numLength = nums.length;
    for(const a of set){
        const filter = nums.filter((e)=> a !== e );
        if(numLength -1 === filter.length){
            return a;
        }
    }


};