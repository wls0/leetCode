function longestCommonPrefix(strs: string[]): string {
    let stringIndex = 0
    let result = ''
    for(const a of strs[0]){
        let strsString = ''
        for(const b of strs){
            strsString = b[stringIndex]
            if(a !== b[stringIndex]){
                break;
            }

          
        }
        if(strsString === a){
            result += a
        }else{
             break;
        }
        
        stringIndex++
    }

    return result
    
};