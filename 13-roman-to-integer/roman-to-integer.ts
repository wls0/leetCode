function romanToInt(s: string): number {
    const data = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0
    let befor = 0
    let index = 0

    for(let a = 0; a < s.length; a++){
        const num = data[s[`${a}`]]
        
        if(befor > num){
            result += num
            befor = num
        }else if(befor === num){
            result += num
        }else{
            result += num - befor - befor
            befor += num
        }   

    }

    return result

};