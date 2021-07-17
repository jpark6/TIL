--- 
title: 콜백지옥과 프로미스(Promise)
---

# 콜백지옥과 프로미스(Promise)

<img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2362E03357889CBE1D" alt="callback hell" />

## JavaScript의 비동기 처리 방식

위의 사진과 같은 콜백 지옥이 발생하는 이유를 알기 위해서는 JavaScript의 비동기 처리 방식에 대해서 이해할 필요가 있다.

JavaScript에서는 많은 함수들이 비동기 처리 방식을 사용한다.
AJAX도 그렇고 setTimeout도 비동기 처리 방식이다.

- ajax  

  ```jQuery
  console.log("before ajax")
  $.getJSON("domain.com/employee",{
      age: 33
      region: "seoul"
    }, function(

    )
  );
  console.log("after ajax")
  ```

- setTimeout 비동기 처리 확인  

  ```javascript
  
  ```

