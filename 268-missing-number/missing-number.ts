function missingNumber(nums: number[]): number {
  const sorted: any[] =  nums.sort((a, b) => {
        if(a > b){
            return 1
        } else {
            return -1
        }
    })

    let count = 0
    for(const a of sorted){
        if(a !== count){
            break;
        }
        count ++;
    }

    return count
};