import { Component, OnInit } from '@angular/core';
import { Emitter } from '../emitters/auth.emitter';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  userName = null ;

  constructor(private chartService : ChartService) { }

  ngOnInit(): void {
    this.chartService.accessChart().subscribe({next: (res) => {
      this.userName = res.username
      Emitter.authEmitter.emit(true)
    },error : (err) =>{
      Emitter.authEmitter.emit(false)
    }})
  }

}
