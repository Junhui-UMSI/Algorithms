function SingleList() {
   this.head = null;
   this._length = 0;
}


sll = new SingleList();
console.log(sll);

SingleList.prototype.push = function(value) {
  var node = {
    value: value,
    next: null
  }
  if(this.head === null){
     this.head = node;
  }
  else{
     currentNode = this.head;
     while(currentNode.next){
        currentNode = currentNode.next;
     }
     currentNode.next = node;
  }
  this._length++;
}
sll.push(2);
sll.push(3);
sll.push(4);
