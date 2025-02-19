const BFS = (graph, startNode) => {
  const visited = new Set();
  const queue = [startNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visited.add(currentNode);

    graph[currentNode].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    });
  }

  return visited;
};

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"],
  E: ["B"],
  F: ["C", "E"],
};
const ArrGraph = [[1, 2], [0, 3, 4], [0], [1], [1, 5], [4]];

const visited = BFS(graph, "A");
const ArrVisited = BFS(ArrGraph, 0);
console.log(visited);
console.log(ArrVisited);
