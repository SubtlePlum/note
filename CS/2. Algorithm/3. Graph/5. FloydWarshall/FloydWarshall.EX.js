const INF = Infinity;

const floydWarshall = (graph) => {
  const dist = Array.from({ length: graph.length }, () =>
    Array.from({ length: graph.length }, () => INF)
  );

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (graph[i][j] !== 0) {
        dist[i][j] = graph[i][j];
      }
    }
  }

  for (let k = 0; k < graph.length; k++) {
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
};

// 그래프를 인접 행렬로 표현하며, 그래프에서 0은 두 정점 사이에 간선이 없음을 의미하고,
// 0 이외의 값은 해당 간선의 가중치를 나타냄.
// 반환되는 2차원 배열 dist는 각 정점 i에서 정점 j까지의 최단 거리가 dist[i][j]에 저장
const graph = [
  [0, 1, 4, 0, 0],
  [0, 0, 2, 5, 0],
  [0, 0, 0, 0, 3],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
];

console.log(floydWarshall(graph));
