// for Object
// for Object
// for Object
const dijkstra = (graph, start) => {
  const distances = {}; // 시작점으로부터 각 노드까지의 거리를 저장하는 객체
  const visited = {}; // 방문한 노드를 체크
  for (let vertex in graph) {
    distances[vertex] = Infinity; // 초기 거리는 무한대로 설정
    visited[vertex] = false; // 모든 노드를 방문하지 않은 것으로 초기화
  }
  distances[start] = 0; // 시작 노드의 거리는 0

  // 모든 노드를 방문할 때까지 반복
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    let current = getMinVertex(distances, visited); // 아직 방문하지 않은 노드 중에서 거리가 가장 작은 노드 선택
    visited[current] = true; // 선택한 노드 방문 체크

    // 선택한 노드와 연결된 모든 이웃 노드에 대해 반복
    for (let neighbor in graph[current]) {
      let distance = graph[current][neighbor]; // 선택한 노드와 이웃 노드 간의 거리
      let totalDistance = distance + distances[current]; // 시작점부터 이웃 노드까지의 거리

      // 이웃 노드가 방문하지 않았고, 현재 경로를 통해 시작점에서 이웃 노드까지의 거리가 더 짧을 경우
      if (!visited[neighbor] && totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance; // 거리 정보를 업데이트
      }
    }
  }
  return distances;
};

const getMinVertex = (distances, visited) => {
  let minDistance = Infinity;
  let minVertex = null;
  // 모든 노드에 대해 반복
  for (let vertex in distances) {
    // 아직 방문하지 않은 노드 중에서 거리가 가장 작은 노드를 찾음
    if (distances[vertex] < minDistance && !visited[vertex]) {
      minDistance = distances[vertex];
      minVertex = vertex;
    }
  }
  return minVertex;
};

const graph = {
  A: { B: 2, C: 4 },
  B: { C: 1, D: 2 },
  C: { D: 1, E: 3 },
  D: { E: 1 },
  E: {},
};

console.log(dijkstra(graph, "A"));
