function solution(num) {
    let length = num.length;
    if (length <= 4) {
        return num;
    } else {
        let slice = num.slice(length-4, length)
        let newSt = '';
        for (let i = 0; i < length-4; i++) {
            newSt += '*'
        }
        return newSt += slice
    }
}
