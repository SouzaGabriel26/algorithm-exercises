// Given the root of a binary search tree, rearrange the tree in in-order
//  so that the leftmost node in the tree is now the root of the tree,
// and every node has no left child and only one right child.

// solution: https://leetcode.com/problems/increasing-order-search-tree/submissions/1261679285


import { TreeNode } from "../TreeNode";

export function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  let newNode: TreeNode | null = null;
  let current: TreeNode | null = null;

  function inOrder(root: TreeNode | null) {
    if (!root) return root;

    inOrder(root.getLeft());
    if (!newNode) {
      newNode = new TreeNode(root.getVal());
      current = newNode;
    } else {
      current?.setRight(new TreeNode(root.getVal()));
      current = current?.getRight() ?? null;
    }
    inOrder(root.getRight());

    return newNode;
  }

  root = inOrder(root);
  return root;
}