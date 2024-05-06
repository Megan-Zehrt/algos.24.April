// 637. Average Of Levels in Binary Tree

// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers withing 10-5 of the actuat answer will be accepted.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    
    let levels = []

    function dfs(node, level){

        if(!node){
            return
        }

        if(levels.length === level){
            levels.push([0,0])
        }


        levels[level][0] += node.val
        levels[level][1]++

        dfs(node.left, level+1)
        dfs(node.right, level+1)
    }

    dfs(root, 0)
    return levels.map(level => level[0] / level[1])
};