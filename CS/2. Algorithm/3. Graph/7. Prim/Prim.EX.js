const prim = (graph) => {
  // 시작 정점을 임의로 정함 (0번 정점을 시작점으로 선택)
  const start = 0;

  // 최소 신장 트리를 담을 배열 생성
  const mst = [];

  // 방문한 정점을 체크하기 위한 배열 생성
  const visited = new Array(graph.length).fill(false);

  // 시작 정점을 방문한 것으로 처리
  visited[start] = true;

  // 모든 정점을 방문할 때까지 반복
  while (mst.length < graph.length - 1) {
    // 방문한 정점에서 연결된 간선 중 가장 작은 가중치를 가진 간선을 찾음
    let minEdge = null;
    let minWeight = Infinity;
    for (let from = 0; from < graph.length; from++) {
      // from 정점이 이미 방문된 정점이어야 함
      if (visited[from]) {
        for (let to = 0; to < graph.length; to++) {
          // from에서 to로 가는 간선이 존재하고, to 정점이 아직 방문되지 않았을 때
          if (graph[from][to] !== 0 && !visited[to]) {
            if (minWeight > graph[from][to]) {
              minEdge = [from, to];
              minWeight = graph[from][to];
            }
          }
        }
      }
    }

    // 가장 작은 가중치를 가진 간선을 최소 신장 트리에 추가하고, 방문한 정점을 체크
    mst.push(minEdge);
    visited[minEdge[1]] = true;
  }

  return mst;
};

// 예제 실행
const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
];

const mst = prim(graph);
console.log(mst);
