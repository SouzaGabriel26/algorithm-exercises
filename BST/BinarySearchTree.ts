import { TreeNode } from "./TreeNode";

export class BinarySearchTree {
  root: TreeNode | null;
  quantity: number;

  constructor() {
    this.root = null;
    this.quantity = 0;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getRoot(): TreeNode | null {
    return this.root;
  }

  public isEmpty(): boolean {
    return this.quantity === 0;
  }

  public search(value: number, node: TreeNode | null = this.root): TreeNode | null {
    const nodeValue = node?.getVal();

    if (!nodeValue) return null;

    if (nodeValue === value) {
      return node;
    } else if (nodeValue > value) {
      return this.search(value, node?.getLeft());
    } else if (nodeValue < value) {
      return this.search(value, node?.getRight());
    }

    return null;
  }

  private insertRecursive(value: number, node: TreeNode | null = this.root): TreeNode {
    if (!node) {
      return new TreeNode(value);
    }

    if (node.getVal() > value) {
      node.setLeft(this.insertRecursive(value, node.getLeft()));
    } else if (node.getVal() < value) {
      node.setRight(this.insertRecursive(value, node.getRight()));
    }

    return node;
  }

  public insert(value: number): boolean {
    const valueAlreadyExists = this.search(value);
    if (valueAlreadyExists) return false;

    this.root = this.insertRecursive(value, this.root);
    this.quantity++;
    return true;
  }

  public preOrder(node: TreeNode | null = this.root): number[] {
    const result: number[] = [];

    if (!node) return result;

    result.push(node.getVal());
    result.push(...this.preOrder(node.getLeft()));
    result.push(...this.preOrder(node.getRight()));

    return result;
  }

  public inOrder(node: TreeNode | null = this.root): number[] {
    const result: number[] = [];

    if (!node) return result;

    result.push(...this.inOrder(node.getLeft()));
    result.push(node.getVal());
    result.push(...this.inOrder(node.getRight()));

    return result;
  }

  public postOrder(node: TreeNode | null = this.root): number[] {
    const result: number[] = [];

    if (!node) return result;

    result.push(...this.postOrder(node.getLeft()));
    result.push(...this.postOrder(node.getRight()));
    result.push(node.getVal());

    return result;
  }

  public remove(value: number): boolean {
    this.root = removeRecursive(value, this.root);
    
    if (!this.root) return false;
    this.quantity--;
    return true;

    function removeRecursive(value: number, node: TreeNode | null): TreeNode | null {
      if (!node) return null;
      
      if (value > node.getVal()) {
        node.setRight(removeRecursive(value, node.getRight()))
      } else if (value < node.getVal()) {
        node.setLeft(removeRecursive(value, node.getLeft()))
      } else {
        // node founded
        if (!node.getLeft() && !node.getRight()) {
          node = null;
        } else if (!node.getLeft()) {
          node = node.getRight();
        } else if (!node.getRight()) {
          node = node.getLeft();
        } else {
          let maxLeftNode = node.getLeft(); 
          
          while (maxLeftNode?.getRight()) {
            maxLeftNode = maxLeftNode.getRight();
          }

          node.setVal(maxLeftNode?.getVal() ?? 0);

          if (maxLeftNode?.getVal() && maxLeftNode.getVal() > 0) {
            node.setLeft(removeRecursive(maxLeftNode?.getVal(), node.getLeft()));
          }
        }
      }
      return node;
    }
  }

}