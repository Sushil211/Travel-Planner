let plane = 0 //This can store only two values, 0 if the plane is not being used or the weight of the edge for which the plane is used

let p1 = -1, p2 = -1 //p1 and p2 are the nodes conncted by the plane route or -1 if no plane is needed

for(let pos in data["edges"]){
	let edge = data["edges"][pos]

	if(edge["type"] === 1) //type 1 means plane route, type 0 means bus route
	{
		let to = edge["to"] - 1
		let from = edge["from"] - 1
		let wght = parseInt(edge['label'])

		if(dist1[to][0] + wght + dist1[from][0] < min_dist)
		{
			plane = wght
			p1 = to
			p2 = from
			min_dist = dist1[to][0] + wght + dist1[from][0]
		}

		if(dist2[to][0] + wght + dist1[from][0] < min_dist) //other way of using the plane route is also possible
		{
			plane = wght
			p2 = to
			p1 = from
			min_dist = dist2[to][0] + wght + dist1[from][0]
		}
	}
}