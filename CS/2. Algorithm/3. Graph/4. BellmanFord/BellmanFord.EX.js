const bellmanFord = (graph, start) => {
  const distances = new Array(graph.length).fill(Infinity);
  distances[start] = 0;

  for (let i = 0; i < graph.length - 1; i++) {
    for (let j = 0; j < graph.length; j++) {
      for (let k = 0; k < graph[j].length; k++) {
        const currentDistance = distances[j] + graph[j][k];
        if (currentDistance < distances[k]) {
          distances[k] = currentDistance;
        }
      }
    }
  }

  // 음수 사이클 확인
  for (let j = 0; j < graph.length; j++) {
    for (let k = 0; k < graph[j].length; k++) {
      const currentDistance = distances[j] + graph[j][k];
      if (currentDistance < distances[k]) {
        return null;
      }
    }
  }

  return distances;
};

const start = 0;
const graph = [
  [0, 6, 0, 7, 0],
  [0, 0, 5, 8, 0],
  [0, -2, 0, 0, 0],
  [0, 0, -3, 0, 9],
  [2, 0, 7, 0, 0],
];
console.log(bellmanFord(graph, start));
