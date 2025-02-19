const DFS = (graph, node, visited = new Set()) => {
  visited.add(node);

  graph[node].forEach((neighbor) => {
    if (!visited.has(neighbor)) {
      DFS(graph, neighbor, visited);
    }
  });

  return visited;
};

// 사용 예시
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
const ArrGraph = [[1, 2], [0, 3, 4], [0], [1], [1, 5], [4]];

const visited = DFS(graph, "A");
const ArrVisited = DFS(ArrGraph, 0);
console.log(visited);
console.log(ArrVisited);
