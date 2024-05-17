// Problem: Search in a Binary Search Tree
// resolved in leetcode: https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/1260848856

import { TreeNode } from '../TreeNode'

export function searchBST(root: TreeNode | null, value: number): TreeNode | null {
  if (!root) return null;

  if (root.getVal() === value) {
    return root;
  } else if (value > root.getVal()) {
    return searchBST(root.getRight(), value);
  } else if (value < root.getVal()) {
    return searchBST(root.getLeft(), value);
  }

  return null;
}