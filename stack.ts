export function Stack(): void {
  this.top = -1;
  this.items = {};
}

Stack.prototype.push = function (item) {
  this.top += 1;
  this.items[this.top] = item;
};

Stack.prototype.pop = function () {
  delete this.items[this.top];
  this.top -= 1;
};

Stack.prototype.currentItem = function () {
  return this.items[this.top];
};

// const s1 = new Stack();

// s1.push(2);
// s1.push(3);
// s1.push(4);
// s1.push(56);

// s1.pop();
// console.log(s1);
