function solution(numbers) {
    let answer = 0;
    
    for (let i = 0; i < 10; i++) {
        //0부터 9까지의 숫자 중에서 numbers에 포함되지 않은 숫자를 더함
        if(!numbers.includes(i)) answer += i;
    }
    return answer;  
}