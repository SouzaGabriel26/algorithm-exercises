import { BinarySearchTree } from "./BST/BinarySearchTree";
import { TreeNode } from "./BST/TreeNode";
import { balanceBST } from "./BST/leetcode-exercises/balanceBST";
import { evaluateTree } from "./BST/leetcode-exercises/evaluateTree";
import { getTargetCopy } from "./BST/leetcode-exercises/getTargetCopy";
import { increasingBST } from "./BST/leetcode-exercises/increasingBST";
import { mergeTrees } from "./BST/leetcode-exercises/mergeTrees";
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


  -----------------------------------------------
`)

const subtreeLeft = new TreeNode(1)
const subtreeRight = new TreeNode(3, new TreeNode(0), new TreeNode(1))
const treeToTestEvaluate = new TreeNode(2, subtreeLeft, subtreeRight);
console.log('Evaluate Tree\n')

console.log(treeToTestEvaluate)

const evaluatedTree = evaluateTree(treeToTestEvaluate);
console.log(`
  Tree example:
          2
        /   |
      1       3
            /   |
          0       1
`)


console.log(`\nExpected output: true\nOutput: ${evaluatedTree}



-----------------------------------------------
`)



const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(50)
tree.insert(2)
tree.insert(1)
tree.insert(501)
tree.insert(5)
tree.insert(8)

console.log(`
  tree before balance:
`)
console.log(tree)

console.log('\n\n')

console.log(`
  tree after balance:
`)
const balancedTree = balanceBST(tree.getRoot());
console.log(balancedTree)



const root1 = new TreeNode(1, new TreeNode(3), new TreeNode(2))
const root2 = new TreeNode(2, new TreeNode(2), new TreeNode( 8))
const mergedTree = mergeTrees(root1, root2);

console.log(`
  Merge Binary Trees:

`)

console.log('Tree 1: ', root1)
console.log('Tree 2: ', root2)
console.log('Merged Tree: ', mergedTree)


console.log(`
  TESTING INCREASING BINARY SEARCH TREE
`)

console.log(JSON.stringify(increasingBST(balancedTree)))