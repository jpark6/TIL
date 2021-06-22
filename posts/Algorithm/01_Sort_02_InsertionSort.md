# [Sort] Insertion Sort

## ⚙️ 정렬 방식

- 2번째 인덱스부터 시작
- 해당 인덱스의 값 B와 앞에 있는 값 A 를 비교하여
  A 값이 더 크면, A를 뒤 인덱스로 이동
  ![insertion sort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)
  출처: [https://commons.wikimedia.org/wiki/File:Insertion-sort-example.gif](https://commons.wikimedia.org/wiki/File:Insertion-sort-example.gif)

## 📝 구현

### 랜덤 배열 생성

### 랜덤 배열 확인

  ```python
  import random as rd
  arr = rd.sample(range(1,101), 100)
  print(arr)
  ```

  ```python
  [70, 84, 27, 12, 29, 50, 60, 93, 45, 14, 48, 5, 77, 54, 87, 71, 57, 17, 80, 62, 99, 90, 69, 43, 75, 66, 92, 40, 24, 68, 35, 44, 73, 39, 21, 3, 31, 56, 33, 100, 1, 61, 52, 67, 10, 82, 26, 98, 9, 79, 59, 53, 11, 65, 97, 94, 36, 2, 28, 81, 46, 37, 86, 23, 89, 49, 74, 55, 32, 72, 63, 51, 7, 22, 42, 41, 78, 19, 88, 76, 64, 34, 15, 83, 95, 58, 4, 96, 20, 38, 91, 16, 6, 25, 18, 47, 8, 30, 85, 13]
  ```

### 정렬 알고리즘 코드

  ```python
  def insertion_sort(array):
  for i in range(len(array) - 1):
    for j in range(i+1, 0, -1):
      if array[j] < array[j-1]:
        array[j], array[j-1] = array[j-1], array[j]
  ```


### 정렬 결과 확인

  ```python
  insertion_sort(arr)
  print(arr)
  ```

  ```python
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
  ```

<br>

## 🧮 알고리즘 분석  

- 반복문 2중으로 사용 : $O(n^2)$  
  - 최악의 경우: $\frac{n (n-1)}{2}$  
- 완전 정렬이 되어 있을 경우: $O(n)$  
