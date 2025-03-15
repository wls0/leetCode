function isValid(s: string): boolean {
     const data = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
    const list = []
    
    let index = 0
    for(const a of s){
        const value = data[`${a}`];

        if(!value){
            if(index === 0){
                return false
            }

            const listData = list.pop()
            if(data[listData] === a){
                
            }else{
                list.push(listData)
                list.push(a)
                
            }
        }else{
            list.push(a)
        }  
        index++
    }
    
    return list.length === 0 ? true : false
};