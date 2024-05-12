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

}