import * as node from './node'
import { noSideEffects } from '@angular/core/src/util';

export class HashTable {
   private size: Number;
   private data: Array<Object>  
     
    constructor(size){
        this.size = size;
        this.data = new Array(size, Object);
    }

    add = (hashCode, val) => {
        if(this.data[hashCode].hasOwnProperty("key") == false){
            console.log("I'm emptty")
            this.data[hashCode].constructor({key: hashCode, val: val})
        }
        else {
            console.log("I alread y exist")
        }
    }


}

export function getHashCode(key) {

    var i;
    var char
    var hash = 0;
	if (key.length == 0) return hash;
	for (i = 0; i < key.length; i++) {
		char = key.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & 0xFFFF; // Convert to 16 bit integer
	}
	return hash;
}
