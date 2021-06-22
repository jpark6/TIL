# [Sort] Selection Sort

## ⚙️ 정렬 방식

- 주어진 데이터 중, 최소값을 찾아 맨 앞의 값과 교체함.  
- 해당 최소값을 제외한 나머지 데이터 중 최소값 찾아 그전 최소값 다음에 붙여 넣음.  
- 끝날때 까지 계속.  
  ![selection sort](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)  
  출처: [https://en.wikipedia.org/wiki/Selection_sort](https://en.wikipedia.org/wiki/Selection_sort)

## 📝 구현

### 랜덤 배열 생성

  ```python
  import random as rd
  arr = rd.sample(range(1,101), 100)
  print(arr)
  ```

### 랜덤 배열 확인

  ```python
  [11, 65, 53, 57, 29, 97, 80, 78, 17, 98, 6, 83, 72, 73, 2, 46, 95, 12, 26, 55, 58, 84, 59, 70, 14, 44, 25, 85, 3, 76, 43, 69, 66, 81, 89, 35, 33, 48, 91, 68, 22, 39, 77, 32, 36, 18, 74, 86, 30, 4, 23, 42, 88, 56, 45, 75, 38, 21, 87, 24, 99, 8, 13, 52, 34, 9, 15, 37, 63, 20, 90, 79, 27, 62, 94, 51, 96, 50, 71, 16, 61, 100, 93, 67, 60, 92, 41, 64, 54, 49, 82, 1, 40, 47, 5, 28, 7, 31, 10, 19]
  ```

### 정렬 알고리즘 코드

  ```python
  def selection_sort(array):
  for i in range(len(array) - 1):
    min_idx = i
    for j in range(i+1, len(array)):
      if array[min_idx] > array[j]:
        min_idx = j
    array[min_idx], array[i] = array[i], array[min_idx]
  ```

### 정렬 결과 확인

  ```python
  selection_sort(arr)
  print(arr)
  ```

  ```python
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
  ```

<br>

## 🧮 알고리즘 분석  

- 반복문 2중으로 사용 : $O(n^2)$  
- 실제로는 $\frac{n(n-1)}{2}$
