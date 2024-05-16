// Find a Corresponding Node of a Binary Tree in a Clone of That Tree
// leetcode - Tree problem
// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/submissions/1259144870

import { TreeNode } from "./TreeNode";

export function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {

  return preOrderTraversal(cloned);
  
  function preOrderTraversal(node: TreeNode | null): TreeNode | null {
    if (!node) return null;

    if (node.getVal() === target?.getVal()) return node;

    return preOrderTraversal(node.getLeft()) || preOrderTraversal(node.getRight());
  }
}