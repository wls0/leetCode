function lengthOfLongestSubstring(s: string): number {
const maps = new Map<string, number>()

let index = 0
let maxLength = 0
let start = 0

for(const a of s){
    if(maps.has(a)){
        console.log(maps.get(a), start, a)
        start = Math.max(start, maps.get(a) + 1);
    }

    maps.set(a, index);

    maxLength = Math.max(maxLength, index - start +1);

    index ++    
}
return maxLength

};