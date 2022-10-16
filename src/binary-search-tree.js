const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.mainRoot = null;
  }
  root() { return this.mainRoot }
  has(data) { return !!this.search(this.mainRoot, data) }
  min() { return this.detourTree(this.mainRoot, true) }
  max() { return this.detourTree(this.mainRoot, false, true) }
  find(data) {
    if (!this.search(this.mainRoot, data)) return null;
    return this.search(this.mainRoot, data);
  }
  add(data) {
    const createTree = (node, data) => {
      if (!node) return new Node(data)
      if (node.data == data) return node
      node.data > data ?
        node.left = createTree(node.left, data) :
        node.right = createTree(node.right, data)
      return node;
    }
    this.mainRoot = createTree(this.mainRoot, data);
  }
  remove(data) {
    const removeBranch = (node, data) => {
      if (!node) return null;
      if (node.data > data) { node.left = removeBranch(node.left, data); return node }
      else if (node.data < data) { node.right = removeBranch(node.right, data); return node }
      else {
        if (!node.left && !node.right) return null;
        if (!node.left) { node = node.right; return node }
        if (!node.right) { node = node.left; return node }
        let maxBranch = node.left;
        while (maxBranch.right) maxBranch = maxBranch.right
        node.data = maxBranch.data
        node.left = removeBranch(node.left, maxBranch.data);
        return node;
      }
    }
    this.mainRoot = removeBranch(this.mainRoot, data);
  }
  search(node, data) {
    if (node == null) return;
    if (node.data == data) return node;
    return node.data > data ? this.search(node.left, data) : this.search(node.right, data);
  }
  detourTree(node, min = false, max = false) {
    if (node.left && min) return this.detourTree(node.left, min);
    if (node.right && max) return this.detourTree(node.right, min, max);
    return node.data
  }
}
// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
// root() {
//     return this.root;
//   }

//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }



module.exports = {
  BinarySearchTree
};