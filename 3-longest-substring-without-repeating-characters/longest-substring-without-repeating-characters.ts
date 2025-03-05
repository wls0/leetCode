function lengthOfLongestSubstring(strings: string): number {
const result = [];
let index = 0

if(strings.length <= 1){
    return strings.length
}

for(const a of strings){
    const set = new Set()
    let count:number = 0;

    for(let b = index; b < strings.length; b++){
        const string = strings[b];
        if(set.has(string)){
            result.push(count)
            break;
        }else{
            set.add(string)
            count += 1
            
            if(count === strings.length - index){
                result.push(count)
                break;
            }
        }    
    }

    index ++
}

const max = Math.max(...result)
return max
};