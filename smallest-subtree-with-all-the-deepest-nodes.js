https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    const depths = new Map();
    let maxDepth = 0;
    
    const queue = [[root, 0]];
    
    /**
    * Iterate the tree and populate 2 hashmaps:
    * depth → nodes
    */
    while(queue.length) {
        
        let [node, depth] = queue.shift();
        
        maxDepth = Math.max(maxDepth, depth);
        
        if(node.left) {
            queue.push([node.left, depth + 1])
        }
        
        if (node.right) {
            queue.push([node.right, depth + 1])
        }
        
        if (!depths.has(depth)) {
            depths.set(depth, new Set())
        }
        
        depths.get(depth).add(node)
    }
    
    return commonAnchestor(depths.get(maxDepth));
};


function commonAnchestor(nodesArr) {
    let nodes = new Set(nodesArr)
    const parents = new Map();
    
    const queue = [root];
    
    /**
    * Iterate the tree and populate 2 hashmaps:
    * depth → nodes
    * node → parent
    */
    while(queue.length) {
        
        let node = queue.shift();
        
        
        
        if(node.left) {
            queue.push(node.left)
            parents.set(node.left, node);
        }
        
        if (node.right) {
            queue.push(node.right)
            parents.set(node.right, node);
        }
    }
    
    while(nodes.size > 1) {
        let next = new Set()
        for (let node of nodes) {
            if (parents.has(node)) {
                next.add(parents.get(node));
            }
        }        
        nodes = next;
    }
    
    return firstValueFromSet(nodes);
}

function firstValueFromSet(set) {
    return set.values().next().value
}
