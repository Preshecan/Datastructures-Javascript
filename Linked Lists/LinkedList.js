function LinkedList(){
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev){
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){			//adds new head node
	var newNode = new Node(value, this.head, null);
	if(this.head){
		this.head.prev = newNode;
	}else{
		this.tail = newNode;
	}
	this.head = newNode;
};

LinkedList.prototype.addToTail = function(value){		//adds new tail node
	var newNode = new Node(value, null, this.tail);
	if(this.tail){
		this.tail.next = newNode;
	}else{
		this.head = newNode;
	}
	this.tail = newNode;
};

LinkedList.prototype.removeHead = function(){			//removes current head node
	if(!this.head){
		return null;
	}
	var val = this.head.value;
	this.head = this.head.next;
	if(this.head){
		this.head.prev = null;
	}else{
		this.tail = null;
	}
	return val;
}

LinkedList.prototype.removeTail = function(){			//removes current tail node
	if(!this.tail){
		return null;
	}
	var val = this.tail.value;		//store tail value
	this.tail = this.tail.prev;		//move tail pointer back a place
	if(this.tail){
		this.tail.next = null;		//set old tail to null
	}else{
		this.tail = null;			//empty list case
	}
	return val;						//return old tail value
}

LinkedList.prototype.search = function(searchValue){	//searches for node with specified value
	var currentNode = this.head;
	while(currentNode){
		if(currentNode.value === searchValue){
			return currentNode;
		}
		currentNode = currentNode.next;
	}
	return null;
}

LinkedList.prototype.indexOf = function(value) {		//returns index of specified value
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === value) indexes.push(currentIndex);
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};

//Test functions
var LL = new LinkedList();

LL.addToHead(1000);
LL.addToHead(2000);
LL.addToTail(3000);
console.log(LL.search(1000));
console.log(LL.indexOf(1000));

