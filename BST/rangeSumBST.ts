import { TreeNode } from "./TreeNode";

export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum=0;

  function dfs(root: TreeNode | null) {
      if (!root) return;

      if (root.val >= low && root.val <= high) {
          sum += root.val;
      }

      dfs(root.left)
      dfs(root.right)
  }

  dfs(root)

  return sum;
};