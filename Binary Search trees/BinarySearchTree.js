function BST(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

BST.prototype.insert = function(value){
	if(value <= this.value){
		if(!this.left){
			this.left = new BST(value);
		}else{
			this.left.insert(value);
		}
	}else if(value > this.value){
		if(!this.right){
			this.right = new BST(value);
		}else{
			this.right.insert(value);
		}
	}
};

BST.prototype.contains = function(value){
	if(value === this.value){
		return true;
	}else{
		if(value < this.value){
			if(!this.left){
				return false;
			}else{
				return this.left.contains(value);
			}
		}else if(value > this.value){
			if(!this.right){
				return false;
			}else{
				return this.right.contains(value);
			}
		}
	}
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order){			//pre-order, in-order or post-order traversal
	if(order === 'pre-order') iteratorFunc(this.value);						//apply function to current value (e.g. log)
	if(this.left){															//iterate left nodes
		this.left.depthFirstTraversal(iteratorFunc, order);				
	}
	if(order === 'in-order') iteratorFunc(this.value);						
	if(this.right){															//iterate right nodes
		this.right.depthFirstTraversal(iteratorFunc, order);	
	}
	if(order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc){
	var queue = [this];
	while(queue.length){
		var treeNode = queue.shift();
		iteratorFunc(treeNode.value);
		if(treeNode.left){
			queue.push(treeNode.left);
		}
		if(treeNode.right){
			queue.push(treeNode.right);
		}

	}
};

BST.prototype.getMinVal = function(){
	if(this.left){															//iterate left nodes
		return this.left.getMinVal();				
	}else{
		console.log(this.value);
	}					
};

BST.prototype.getMaxVal = function(){
	if(this.right){															//iterate left nodes
		return this.right.getMaxVal();				
	}else{
		console.log(this.value);
	}					
};


var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.right.right);
console.log(bst.contains(59));

console.log("-----Min-----");
bst.getMinVal();
console.log("-----Max-----");
bst.getMaxVal();
console.log("----------");
bst.depthFirstTraversal(log, 'in-order');
console.log("----------");
bst.breadthFirstTraversal(log);

function log(value){
	console.log(value);
}

function array(value){
	var array = [];
	array.push(value);
}