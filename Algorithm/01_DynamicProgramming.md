## 동적 계획법 - N으로 표현(프로그래머스 문제)
> [[link]](https://programmers.co.kr/learn/courses/30/lessons/42895)  
> 강의 : [Python/문제풀이] 파이썬을 무기로, 코딩테스트 광탈을 면하자!

### 동적 계획법(Dynamic Programming)
주어진 최적화 문제를 재귀적인 방식보다 작은 부분 문제로 나누어,  
부분 문제를 풀고, 푼 문제를 저장(memoization),  
이 해를 조합하여 전체문제의 해답에 이르는 방식.

알고리즘의 진행에 따라 탐색해야 할 범위를 동적으로 결정하므로써 탐색 범위를 한정

ex) 피보나치 수열: 재귀함수 구현시
```shell
F(4) = f(3)               + f(2)
     = f(2)        + f(1) + f(1) + f(0)
     = f(1) + f(0) + f(1) + f(1) + f(0) 
```
동적계획법 적용
```shell
f(0) = 0, f(1) = 1
f(2) = f(1) + f(0) = 1
f(3) = f(2) + f(1) = 2
f(4) = f(3) + f(2) = 3
```
### 문제 설명
아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

$ 12 = 5 + 5 + (5 / 5) + (5 / 5) $  
$ 12 = 55 / 5 + 5 / 5 $  
$ 12 = (55 + 5) / 5 $

5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

제한사항
N은 1 이상 9 이하입니다.
number는 1 이상 32,000 이하입니다.
수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
최솟값이 8보다 크면 -1을 return 합니다.
입출력 예 

| N | number | return |
|:---:|:---:|:---:|
|5|12|4|
|2|11|3|
입출력 예 설명
예제 #1
문제에 나온 예와 같습니다.

예제 #2
11 = 22 / 2와 같이 2를 3번만 사용하여 표현할 수 있습니다.

### N으로 표현 동적계획법 사용.
- N을 1번 사용해서 만들수 있는 수들 -> `1`
- N을 2번 사용해서 만들수 있는 수들 -> `2`
- N을 3번 사용해서 만들수 있는 수들 -> `3`

### 문제의 해결 예제 N = 5
- `1` : 5
- `2` : 55, `1` [+-X/] `1`  : 55, 10, 0, 25, 1
- `3` : 555,  `1` [+-X/] `2`, `2` [+-X/] `1` 
      : 555, 60, 15, 5, 30, 6, -50, -5, -20, 4, 275, 50, 0, 125, 11, 2, 20, -4, 555
- `4` : 5555, `1` [+-X/] `3`, `2` [+-X/] `2`, `3` [+-X/] `1`
- `5` : 55555, `1` [+-X/] `4`, `2` [+-X/] `3`, `3` [+-X/] `2`, `4` [+-X/] `1`
- `n` : 'x'*n, `1` [+-X/] `n-1` ... `n-1` [+-X/] `1`

```python3
def solution(N,number):
    s = [set() for x in range(8)]
    for i, x in enumerate(s, start=1):
        x.add(int(str(N) * i))
    for i in range(len(s)):
        for j in range(i):
            for op1 in s[j]:
                for op2 in s[i - j - 1]:
                    s[i].add(op1 + op2)
                    s[i].add(op1 - op2)
                    s[i].add(op1 * op2)
                    if op2 != 0:
                        s[i].add(op1 // op2)
        if number in s[i]:
            answer = i + 1
            break
    
    return answer
```

```javascript
/**
 * N을 여러번 사용하여 사칙연산으로 number를 도출함.
 * 이때 N을 몇번 사용하는 것이 가장 적은 것인지 반환.
 * @param {1|2|3|4|5|6|7|8|9} N - 연산에 사용할 숫자 (1~9)
 * @param {number} number - 연산을 통해 도출해야하는 숫자 (0~32,000)
 * @returns {number} - 가장 N을 적게 사용하는 경우의 N의 사용횟수 (n>8 이면 -1)
 */
const solution = (N, number) => {
    const memo_arr = [...Array(9)].map(() => new Set()); // 중복 저장을 피하기 위해 set 사용.
    for(let i=1; i<9; i++) {
        let num_str = '';
        [...Array(i)].forEach(()=> num_str += N)
        memo_arr[i].add(Number(num_str));
        for(let j=1; j<i; j++) {
            //*
            [...memo_arr[j].values()].forEach(op1=> {
                [...memo_arr[i-j].values()].forEach(op2=> {
                    memo_arr[i].add(op1+op2);
                    memo_arr[i].add(op1-op2);
                    memo_arr[i].add(op1*op2);
                    op2 != 0 && memo_arr[i].add(Math.floor(op1/op2));
                });
            });
            /**/
            /*
            for(const op1 of memo_arr[j]) {
                for(const op2 of memo_arr[i-j]) {
                    memo_arr[i].add(op1+op2);
                    memo_arr[i].add(op1-op2);
                    memo_arr[i].add(op1*op2);
                    op2 != 0 && memo_arr[i].add(Math.floor(op1/op2));
                }
            }
            /**/
        }
        if(memo_arr[i].has(number)) {
            return i;
        } 
    }
    return -1;
}
```
