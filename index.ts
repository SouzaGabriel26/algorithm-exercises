import { BinarySearchTree } from "./BST/BinarySearchTree";
import { rangeSumBST } from "./BST/rangeSumBST";

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
---------------------------------
`)
