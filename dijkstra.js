//function to create a graph with adjacency list representation given number of vertices and edges array

function createGraph(vertices, edges){
	//Here vertices denotes number of vertices in the graph
	//edges denotes edges array
	let adj_list = [] //adjacency list

	for(let i=0;i<vertices;i++){
		adj_list.push([]) //push empty array for each node in the graph
	}

	for(let i=0;i<edges.length(); i++){
		adj_list[edges[i][0]].push([edges[i][1], edges[i][2]]) //edges[i][0] and edges[i][1] denotes vertices and edges[i][2] denotes cost of the edge
		adj_list[edges[i][1]].push([edges[i][0], edges[i][2]]) //The graph is bidirectional
	}

	return adj_list
}

function dijkstra(graph, V, src){
	let vis = Array(V).fill(0) //initialize the visited array
	let dist = []

	for(let i=0; i<V; i++){
		dist.push([100000,-1]); //first value is distance which is a very large value initially and second value is parent
	}

	dist[src][0] = 0

	for(let i=0; i<V-1; i++)
	{
		let min = -1
		for(let j=0; j<V; j++)
		{
			if(vis[j] === 0)
			{
				if(min === -1 || dist[j][0] < dist[min][0])
					min = j
			}
		}
 
		vis[min] = 1

		for(let j=0; j<graph[min].length; j++){
			let edge = graph[min][j]

			if(vis[edge[0]] === 0 && dist[edge[0]][0] > dist[min][0]+edge[1]){
				dist[edge[0]][0] = dist[min][0]+edge[1];
                dist[edge[0]][1] = min;
			}
		}
	}

	return dist;

}

let src = 0;
let V = 9;
let E = [[0,1,4], [0,7,8], [1,7,11], [1,2,8], [7,8,7], [6,7,1], [2,8,2],
         [6,8,6], [5,6,2], [2,5,4], [2,3,7], [3,5,14], [3,4,9], [4,5,10]];

let graph = createGraph(V,E);
let distances = djikstra(graph,V,0);
console.log(distances);