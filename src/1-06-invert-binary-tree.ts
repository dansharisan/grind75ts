// https://leetcode.com/problems/invert-binary-tree/

/* Took me quite some time to figure out this solution, I might need to improve more on data structure algorithm. 
    But suprisingly this solution beat 82.18% in Runtime and 97.13% in Memory of users with TypeScript at the time I submited this
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return root;
    }

    let parentSwappableNodes: TreeNode[] = [];
    let toBeTraversedNodes: TreeNode[] = [root];
    // Traverse all the nodes and keep nodes that have at least 1 child node so they can be swapped
    while (toBeTraversedNodes.length > 0) {
        if (toBeTraversedNodes[0].left !== null || toBeTraversedNodes[0].right !== null) {
            parentSwappableNodes.push(toBeTraversedNodes[0]);
            if (toBeTraversedNodes[0].left !== null) {
                toBeTraversedNodes.push(toBeTraversedNodes[0].left);
            } 
            if (toBeTraversedNodes[0].right !== null) {
                toBeTraversedNodes.push(toBeTraversedNodes[0].right)
            }
        }

        // Remove the first element because we just traversed through it
        toBeTraversedNodes.shift();
    }

    // Iterate over swappable nodes and do swapping
    parentSwappableNodes.forEach((node) => {
        swapChildrenNodes(node);
    });

    return root;
};

// Swap left <-> right
function swapChildrenNodes(node: TreeNode | null) {
    let tempNode: TreeNode;
    tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
}