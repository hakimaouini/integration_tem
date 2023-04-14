import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-charts-chartjs',
  templateUrl: './charts-chartjs.component.html',
  styleUrls: ['./charts-chartjs.component.css']
})
export class ChartsChartjsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
