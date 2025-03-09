function singleNumber(nums: number[]): number {


    const set = new Set<number>();

    for(const a of nums){
        if(set.has(a)){
            set.delete(a)
        }else{
            set.add(a)
        }
    }
    const result = [...set];
    return result[0]
};