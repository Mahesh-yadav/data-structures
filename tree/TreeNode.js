class TreeNode {
  #data;
  #children;

  constructor(data) {
    this.#data = data;
    this.#children = [];
  }

  get data() {
    return this.#data;
  }

  set data(data) {
    this.#data = data;
  }

  /**
   * adds a child to the tree as either data or TreeNode
   * @param {*} child
   */
  addChild(child) {
    if (child instanceof TreeNode) {
      this.#children.push(child);
    } else {
      this.#children.push(new TreeNode(child));
    }
  }

  /**
   * removes a child from the tree as either data or TreeNode
   * @param {*} childToRemove
   */
  removeChild(childToRemove) {
    const numberOfChildren = this.children.length;

    this.#children = this.#children.filter((child) => {
      if (childToRemove instanceof TreeNode) {
        return child !== childToRemove;
      } else {
        return childToRemove !== child.data;
      }
    });

    if (numberOfChildren === this.#children.length) {
      this.#children.forEach((child) => child.removeChild(childToRemove));
    }
  }

  print(level = 0) {
    let prefix = '';

    for (let i = 0; i < level; i++) {
      prefix += '-- ';
    }

    console.log(`${prefix}${this.#data}`);

    this.#children.forEach((child) => child.print(level + 1));
  }

  /**
   * recursive method that fully traverses the tree with a top-down approach for each child of the tree
   */
  depthFirstTraversal() {
    console.log(this.#data);

    this.#children.forEach((child) => child.depthFirstTraversal());
  }

  /**
   * iterative method that fully traverses the tree a level at a time
   */
  breadthFirstTraversal() {
    const childrenQueue = [];
    childrenQueue.push(this);

    while (childrenQueue.length > 0) {
      const current = childrenQueue.shift();
      console.log(current.data);

      childrenQueue = childrenQueue.concat(current.#children);
    }
  }

  toString() {
    return this.#data.toString();
  }
}

module.exports = TreeNode;
