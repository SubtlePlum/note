// for Array
// for Array
// for Array
const dijkstra = (graph, start) => {
  // 모든 노드까지의 거리를 무한대로 초기화하고 시작 노드의 거리는 0으로 초기화
  const distances = new Array(graph.length).fill(Infinity);
  const visited = new Array(graph.length).fill(false);
  distances[start] = 0;

  // 모든 노드 순회
  for (let i = 0; i < graph.length - 1; i++) {
    const u = minDistance(distances, visited);
    visited[u] = true;
    // u 노드와 연결된 노드들을 순회하며 거리를 업데이트
    for (let v = 0; v < graph.length; v++) {
      if (
        graph[u][v] !== 0 && // u와 v가 연결되어 있으면
        !visited[v] && // 아직 방문하지 않았으면
        distances[u] + graph[u][v] < distances[v] // u를 거쳐서 가는 거리가 더 짧으면
      ) {
        distances[v] = distances[u] + graph[u][v];
      }
    }
  }

  return distances;
};

// 아직 방문하지 않은 노드 중에서 가장 가까운 노드 탐색
const minDistance = (distances, visited) => {
  let min = Infinity;
  let minIndex = -1;

  for (let i = 0; i < distances.length; i++) {
    if (!visited[i] && distances[i] < min) {
      min = distances[i];
      minIndex = i;
    }
  }

  return minIndex;
};

// 배열의 인덱스 === 노드
// 각 인덱스에 해당하는 배열이 해당 노드의 인접 리스트
// 각 인접 리스트의 인덱스가 해당 노드와 인접한 노들를 나타내고, 그 값이 간선 가중치를 나타냄

const graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];

const start = 0;
const distances = dijkstra(graph, start);
console.log(distances);
