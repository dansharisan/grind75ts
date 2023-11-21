// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // Find path to p and q from root node
    let pPath: TreeNode[] = findPathToNode(root, p.val);
    let qPath: TreeNode[] = findPathToNode(root, q.val);
    // Reverse them to traverse it from the bottom
    let reversedPPath: TreeNode[] = pPath.reverse();
    let reversedQPath: TreeNode[] = qPath.reverse();
    // Find the soonest common value from the bottom of each path
    for (let pPathNode of reversedPPath) {
        for (let qPathNode of reversedQPath) {
            if (pPathNode.val === qPathNode.val) {
                return pPathNode;
            }
        }
    }

    return root;
};

function findPathToNode(root: TreeNode, targetNodeValue: number): TreeNode[] {
    if (root.val === targetNodeValue) {
        return [root];
    }

    let paths: TreeNode[][] = [[root]];
    while (paths.length > 0) {
        if (root.left === null && root.right === null) {
            // Remove this path
            paths.shift();
        } else {
            let currentClonedPath: TreeNode[];
            if (root.left !== null) {
                // Clone the current path so we can use it for the new path made by the right node if any
                currentClonedPath = paths[0].map((x) => x);
                // Add left node to the current path
                paths[0].push(root.left);
                // Return the path if target value is found
                if (root.left.val === targetNodeValue) {
                    return paths[0];
                }
            }

            if (root.right !== null) {
                // Set currentClonedPath if it has not been
                if (typeof currentClonedPath === 'undefined') {
                    currentClonedPath = paths[0];
                }
                // Add the right node to a new path
                currentClonedPath.push(root.right);
                // Return the path if target value is found
                if (root.right.val === targetNodeValue) {
                    return currentClonedPath;
                }
                // Store as a new path
                paths.push(currentClonedPath);
            }
        }
        
        // Set root to the last node in the path
        root = paths[0][paths[0].length-1];
    }
    
    return [];
}