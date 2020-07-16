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

let vertices = 3
let edges = [[0,1,1],[0,2,2],[1,2,3]]
let graph = createGraph(V,E);
console.log(graph);