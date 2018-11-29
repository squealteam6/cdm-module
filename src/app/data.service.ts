import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import * as node from './node';
import { HashTable, getHashCode } from './hash'



@Injectable({
  providedIn: 'root'
})
export class DataService { 
  node$: Subject<node.Node> = new Subject<node.Node>();
  ESPERNode: node.Node;
  varList = new HashTable(0xFFFF);
  
  
  //test if WC has increased
  private myInterval = setInterval(() => {
    this.http.get<node.Node>("http://192.168.50.202/read_node").subscribe((data) => {
      if(data.wc > this.ESPERNode.wc){
        console.log("new")
      }
    });
  }, 5000);

  //build initial variable list
  constructor(private http: HttpClient) {

    console.log(this.varList)


    this.http.get<node.Node>("http://192.168.50.202/read_node?includeMods=y&includeVars=y&includeData=y&includeAttrs=y").subscribe((data) => {
      this.ESPERNode = data;
      //Build Var hash table
      for(var i = 0; i < 2; i++){
        for(var m = 0; m < 2; m++){
          data.module[m].var.forEach((data) => {
            var hashCode = getHashCode("hello")
            console.log(hashCode);
            this.varList.add(hashCode, 1);
          })
        }
      }
      this.node$.complete()
      })
    } 
}