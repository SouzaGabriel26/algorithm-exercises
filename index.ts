import { BinarySearchTree } from "./BST/BinarySearchTree";
import { getTargetCopy } from "./BST/leetcode-exercises/getTargetCopy";
import { rangeSumBST } from "./BST/leetcode-exercises/rangeSumBST";

const TreeToTestRangeSumBST = new BinarySearchTree();
TreeToTestRangeSumBST.insert(5);
TreeToTestRangeSumBST.insert(2);
TreeToTestRangeSumBST.insert(1);
TreeToTestRangeSumBST.insert(3);
TreeToTestRangeSumBST.insert(8);
TreeToTestRangeSumBST.insert(7);
TreeToTestRangeSumBST.insert(10);

const sum = rangeSumBST(TreeToTestRangeSumBST.getRoot(), 8, 10)

console.log(`
---------------------------------
  **Testing rangeSumBST algorithm**

  Tree: ${JSON.stringify(TreeToTestRangeSumBST)}

  Expected output: 18 (8 + 10)
  Output: ${sum}
--------------------------------
`)


const Bst = new BinarySearchTree();

Bst.insert(5);
Bst.insert(10);
Bst.insert(2);
Bst.insert(50);

console.log(`
---------------------------------
  **Testing BinarySearchTree methods**

  Tree: ${JSON.stringify(Bst)}

  Expected quantity: 4
  quantity: ${Bst.getQuantity()}

  Tree Traversal:
    - preOrder: ${Bst.preOrder()}
    - inOrder: ${Bst.inOrder()}
    - postOrder: ${Bst.postOrder()}

  Remove 5:
    ${Bst.remove(10)}
    - expected quantity: 3
    - quantity: ${Bst.getQuantity()}

  Tree after remove 5: ${JSON.stringify(Bst)}
---------------------------------
`)


const testingBst = new BinarySearchTree()
testingBst.insert(5)
testingBst.insert(7)
testingBst.insert(2)
testingBst.insert(10)
testingBst.insert(1)

const clonedTestingBst = testingBst;

const target = testingBst.search(2);

const result = getTargetCopy(testingBst.getRoot(), clonedTestingBst.getRoot(), target);

console.log(`
  getTargetCopy result: ${JSON.stringify(result)}
`)