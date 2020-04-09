
/**
 * https://leetcode.com/problems/check-completeness-of-a-binary-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const queue = [[root, 0]];
    
    const nodes = [root];
    
    while(queue.length) {
        const [node, levelDepth] = queue.shift();
        
        nodes.push(node.left)
        nodes.push(node.right)
        
        
        if (node.left) {
            queue.push([node.left, levelDepth + 1])
        }
        
        if (node.right) {
            queue.push([node.right, levelDepth + 1]);
        }
    }
    
    let i = 0;
    let nullFound = false;
    while(nodes.length) {
        const nextBatch = nodes.splice(0, Math.pow(2, i));
        
        for (let i = 0; i < nextBatch.length; i++) {
            
            if (nextBatch[i] === null) {
                nullFound = true;
                continue;
            }
            if (nullFound && nextBatch[i]) {
                return false
            }
        }
        
        
        i++;
    }
    
    return true
    
};


