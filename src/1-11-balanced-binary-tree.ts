// https://leetcode.com/problems/balanced-binary-tree/

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

function isBalanced(root: TreeNode | null): boolean {
    if (root == null) return true

    let isBalanced: boolean = true
    let toBeTraversedNodes: TreeNode[] = [root];
    // Traverse all the nodes
    while (toBeTraversedNodes.length > 0) {
        if (toBeTraversedNodes[0].left !== null) {
            toBeTraversedNodes.push(toBeTraversedNodes[0].left);
        } 
        if (toBeTraversedNodes[0].right !== null) {
            toBeTraversedNodes.push(toBeTraversedNodes[0].right)
        }

        // Compare left and right branch height so see if it's balanced at current node
        let leftBranchHeight: number = 1
        let rightBranchHeight: number = 1
        if (root.left !== null) {
            leftBranchHeight += classifyTreeNodes(root.left).length 
        }
        if (root.right !== null) {
            rightBranchHeight += classifyTreeNodes(root.right).length
        }

        if (Math.abs(leftBranchHeight - rightBranchHeight) > 1) {
            isBalanced = false
            break
        }

        // Remove the first element because we just traversed through it
        toBeTraversedNodes.shift();

        // Set the root to the next node in the list
        root = toBeTraversedNodes[0]
    }

    return isBalanced
};

/**
    Traverse the tree and put nodes of each level into arrays
    Ex: For the first example, the output would be [[3], [9, 20] , [15, 7]].
 */
function classifyTreeNodes(root: TreeNode): TreeNode[][] {
    let resultArr: TreeNode[][] = [[root]]
    let hasNextLevel:boolean = true
    while (hasNextLevel) {
        hasNextLevel = false
        let currentHighestLevelNodes: TreeNode[] = resultArr[resultArr.length - 1]
        resultArr.push([])
        currentHighestLevelNodes.forEach((levelNode) => {
            if (levelNode.left !== null) {
                resultArr[resultArr.length - 1].push(levelNode.left)
                hasNextLevel = true
            } 
            if (levelNode.right !== null) {
                resultArr[resultArr.length - 1].push(levelNode.right)
                hasNextLevel = true
            }
        })
    }
    // Remove the last empty array
    resultArr.pop()

    return resultArr
}