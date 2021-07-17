
# [프로그래머스] Lv 3.섬 연결하기

> 문제 : [등굣길
](https://programmers.co.kr/learn/courses/30/lessons/42898)

## 문제 설명  

n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성하세요.  

다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다. 예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.  

### 제한사항
- 섬의 개수 n은 1 이상 100 이하입니다.  
- costs의 길이는 ((n-1) * n) / 2이하입니다.  
- 임의의 i에 대해, costs[i][0] 와 costs[i] [1]에는 다리가 연결되는 두 섬의 번호가 들어있고, costs[i] [2]에는 이 두 섬을 연결하는 다리를 건설할 때 드는 비용입니다.  
- 같은 연결은 두 번 주어지지 않습니다. 또한 순서가 바뀌더라도 같은 연결로 봅니다. 즉 0과 1 사이를 연결하는 비용이 주어졌을 때, 1과 0의 비용이 주어지지 않습니다.  
- 모든 섬 사이의 다리 건설 비용이 주어지지 않습니다. 이 경우, 두 섬 사이의 건설이 불가능한 것으로 봅니다.  
- 연결할 수 없는 섬은 주어지지 않습니다.  

### 입출력 예  
|n|costs|return|
|---|---|---|
|4|[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]|4|

#### 입출력 예 설명
costs를 그림으로 표현하면 다음과 같으며, 이때 초록색 경로로 연결하는 것이 가장 적은 비용으로 모두를 통행할 수 있도록 만드는 방법입니다.  
<img src="https://grepp-programmers.s3.amazonaws.com/files/production/13e2952057/f2746a8c-527c-4451-9a73-42129911fe17.png" title="" alt="image.png" />  

## 문제 풀이  

- 크루스칼 알고리즘 활용
  - 가장 적은 비용으로 모든 노드를 연결하기 위해 사용하는 알고리즘  
- cost가 최소인 섬부터 오름차순으로 배열 정렬  
- costs 반복문 실행하여, 두 섬의 부모 노드 비교
- 부모가 다르면 두 섬을 연결함
- 같을 경우는 이미 연결되었다고 판단

## 코드 구현
- 각각의 섬의 부모를 저장하기 위해 parent 배열 생성  
- costs 배열 오름차순으로 정렬(Arrays.sort)  
- 각각의 섬의 부모 자기자신으로 초기화  
- for 반복문 실행하여 cost의 두 섬(cost[0], cost[1])의 부모확인
- 부모가 다를 경우, cost[1]의 부모를 cost[0]의 부모로 설정.  
  cost의 건설비용(cost[2]) 결과값에 더함.

### Java

  ```Java
import java.util.Arrays;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ConnectIsland {
    public static Logger logger = Logger.getLogger("ConnectIsland");
    int[] parent;

    public int findParent(int node) {
        if(parent[node] == node) {
            return node;
        } else {
            return findParent(parent[node]);
        }
    }

    public int solution(int n, int[][] costs) {
        int answer = 0;

        // costs 배열 오름차순정렬
        Arrays.sort(costs, ((int[] c1, int[] c2) -> c1[2] - c2[2]));

        parent = new int[n];
        for(int i=0; i<n; i++) {
            parent[i] = i;
        }

        for(int[] cost: costs) {
            int p1 = findParent(cost[0]);
            int p2 = findParent(cost[1]);

            System.out.println("cost: " + cost[0] + ", " + cost[1] + ", " + cost[2]);
            System.out.print("root1: "+ p1 + " ");
            System.out.println("root2: "+ p2);
            if(p1 != p2) {
                parent[p2] = p1;
                answer += cost[2];
            }
        }

        for(int p: parent) {
            System.out.println(p);
        }
        return answer;
    }

    public static void main(String[] args) {
        ConnectIsland ci = new ConnectIsland();

        int[][] costs = {{0,1,1},{0,2,2},{1,2,5},{1,3,1},{2,3,8}};
        int answer = ci.solution(4,costs);
        ConnectIsland.logger.log(Level.INFO, "answer: {0}", answer);
    }
}
  ```
