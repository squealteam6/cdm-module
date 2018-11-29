import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import '../node';
import { hashCode } from '../node';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private wc: Number;
  private mac: String;
  private firmware: String;
  private pll1_lock: boolean;
  private pll2_lock: boolean;

  constructor(private data: DataService) {
    this.data.node$.subscribe({
      next: data => console.log(data),
      error: null,
      complete: () => {
        this.wc = this.data.node.wc;
        this.mac = this.data.node.module[6].var[4].d;
        this.firmware = this.data.node.module[7].var[1].d;
      }
    }) 
  }

  ngOnInit() {
  }
}
