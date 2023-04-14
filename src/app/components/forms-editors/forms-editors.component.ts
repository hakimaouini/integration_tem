import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-forms-editors',
  templateUrl: './forms-editors.component.html',
  styleUrls: ['./forms-editors.component.css']
})
export class FormsEditorsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
