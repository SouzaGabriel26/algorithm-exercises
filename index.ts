import { TreeNode } from "./BST/TreeNode";
import { rangeSumBST } from "./BST/rangeSumBST";

const test = new TreeNode(5)
test.setLeft(new TreeNode(2, new TreeNode(1), new TreeNode(3)))
test.setRight(new TreeNode(8, new TreeNode(7), new TreeNode(10)))

const sum = rangeSumBST(test, 8, 10) // 8 + 10 = 18

console.log(test)
console.log(sum)