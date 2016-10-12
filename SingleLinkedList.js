function SingleList() {
   this.head = null;
   this._length = 0;
}


sll = new SingleList();
console.log(sll);

SingleList.prototype.push = function(value) {
var node = {
  value: value,
  next: null,
  prev: null
}
if(this.head === null){
  this.head = node
}
else{
  currentnode = this.head;
  while(currentnode.next){
    currentnode = currentnode.next;
  }
  currentnode.next = node;
  node.prev = currentnode;
}
this._length++;
}


sll.push(2);
sll.push(3);
sll.push(4);
