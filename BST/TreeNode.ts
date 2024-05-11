export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  public static getVal(node: TreeNode): number {
    return node.val;
  }

  public static getLeft(node: TreeNode): TreeNode | null {
    return node.left;
  }

  public static getRight(node: TreeNode): TreeNode | null {
    return node.right;
  }

  public static setVal(node: TreeNode, val: number): void {
    if (node) {
      node.val = val;
    }
  }

  public setLeft(node: TreeNode | null): void {
    if (this) {
      this.left = node;
    }
  }

  public setRight(node: TreeNode | null): void {
    if (this) {
      this.right = node;
    }
  }
}
