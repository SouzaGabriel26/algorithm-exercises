// my solution on leetcode: https://leetcode.com/problems/balance-a-binary-search-tree/submissions/1260909874

import { TreeNode } from "../TreeNode";

export function balanceBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const orderedValues = inOrderTraversal(root);

  root = balance(orderedValues, 0, orderedValues.length - 1)

  return root;

  function balance(values: number[], start: number, end: number): TreeNode | null {
    if (start > end) return null;

    const middle = Math.floor((start + end) / 2);
    const node = new TreeNode(values[middle]);

    node.setLeft(balance(values, start, middle - 1));
    node.setRight(balance(values, middle + 1, end));

    return node;
  }

  
  function inOrderTraversal(node: TreeNode | null): number[] {
    if (!node) return [];

    return [
      ...inOrderTraversal(node.getLeft()),
      node.getVal(),
      ...inOrderTraversal(node.getRight())];
  }

}