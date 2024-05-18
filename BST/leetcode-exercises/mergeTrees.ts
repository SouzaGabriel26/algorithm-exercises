// leetcode solution: https://leetcode.com/problems/merge-two-binary-trees/submissions/1261390460

import { TreeNode } from "../TreeNode";

export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) return null;
  if (root1 && !root2) return root1;
  if (!root1 && root2) return root2;

  const newRoot = new TreeNode(root1!.getVal() + root2!.getVal());
  newRoot.setLeft(mergeTrees(root1!.getLeft(), root2!.getLeft()));
  newRoot.setRight(mergeTrees(root1!.getRight(), root2!.getRight()));

  return newRoot;
}