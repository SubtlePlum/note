// 간선 클래스 정의
class Edge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

// 부모 노드를 찾는 함수
const findParent = (node, parents) => {
  if (parents[node] === node) return node;
  return findParent(parents[node], parents);
};

// 두 부모 노드를 합치는 함수
const unionParent = (a, b, parents) => {
  a = findParent(a, parents);
  b = findParent(b, parents);
  if (a < b) parents[b] = a;
  else parents[a] = b;
};

const kruskal = (graph) => {
  // 간선들을 담을 배열 생성
  const edges = [];

  // 그래프의 모든 간선을 배열에 넣음
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (graph[i][j] !== 0) {
        edges.push(new Edge(i, j, graph[i][j]));
      }
    }
  }

  // 간선을 가중치를 기준으로 오름차순 정렬
  edges.sort((a, b) => a.weight - b.weight);

  // 부모 노드 배열 생성 및 초기화
  const parents = new Array(graph.length);
  for (let i = 0; i < graph.length; i++) {
    parents[i] = i;
  }

  // 최소 신장 트리를 담을 배열 생성
  const mst = [];

  // 간선을 하나씩 선택하며 최소 신장 트리 완성
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    // 두 노드의 부모 노드가 같으면 사이클이 생기므로 무시
    if (findParent(edge.from, parents) !== findParent(edge.to, parents)) {
      unionParent(edge.from, edge.to, parents);
      mst.push(edge);
    }
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

const mst = kruskal(graph);
console.log(mst);
