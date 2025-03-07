// idea: use heap for fast lookup at the geartest distance and remove it

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var kClosest = function(points, k) {
    
    let maxHeap = new MaxPriorityQueue({
        priority: (item) => item[0]
    })

    for (let [x, y] of points) {
        let dist = x * x + y * y
        
        if (maxHeap.size() < k) {
            maxHeap.enqueue([dist, [x, y]])
        } else if (dist < maxHeap.front().priority) {
            maxHeap.dequeue()
            maxHeap.enqueue([dist, [x, y]])
        }
    }

    return maxHeap.toArray().map(item => item[1])
};
