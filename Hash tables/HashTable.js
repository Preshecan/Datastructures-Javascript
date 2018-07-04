function HashTable(size){
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next){
	this.key = key;
	this.value = value;
	this.next = next || null;
}

HashTable.prototype.hash = function(key){
	var total = 0;
	for(var i=0 ; i<key.length ; i++){
		total += key.charCodeAt(i);
	}
	var bucket = total % this.numBuckets;
	return bucket;
}

HashTable.prototype.insert = function(key, value){
	var index = this.hash(key);
	if(!this.buckets[index]){								//bucket is empty so insert node
		this.buckets[index] = new HashNode(key, value);
	}else if(this.buckets[index].key === key){
		this.buckets[index].value = value;
	}else{													//bucket is not empty so treat collision by adding node as a linked list
		var currentNode = this.buckets[index];
		while(currentNode.next){
			if(currentNode.next.key === key){
				currentNode.next.value = value;
				return;
			}
			currentNode = currentNode.next;
		}
		currentNode.next = new HashNode(key,value);
	}
}

HashTable.prototype.get = function(key){
	var index = this.hash(key);
	if(!this.buckets[index]){
		return null;
	}else{
		var currentNode = this.buckets[index];
		while(currentNode){
			if(currentNode.key === key){
				return currentNode.value;
			}	
			currentNode = currentNode.next;
		}
		return null;
	}
}

HashTable.prototype.retrieveAll = function(){
	var index = 0;
	var filledBuckets = [];
	for(var i = 0 ; i < this.numBuckets; i++){
		if(this.buckets[i]){
			filledBuckets.push(this.buckets[i]);
			// while(this.buckets[i].next){					//to display collision as part of the main array
			// 	filledBuckets.push(this.buckets[i].next);
			// 	this.buckets[i] = this.buckets[i].next;
			// }
		}
	}
	return filledBuckets;
}


var myHT = new HashTable(30);
myHT.insert('Dean', 'dean@gmail.com');				//regular insert
myHT.insert('Becca', 'becca@gmail.com');			//regular insert
myHT.insert('Dane', 'collision@gmail.com');			//test bucket collsion
myHT.insert('Dean', 'dean2@gmail.com');				//test update email insert
console.log(myHT.hash('Becca'));
//console.log(myHT);
console.log(myHT.get('Becca'));
console.log(myHT.retrieveAll())
