import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  expression: any = '';
  result: any = 0;

  ngOnInit()
  {
  }

  addToExpression(value: any) {
    if(this.expression === null)
      this.expression = value;
   else {
      this.expression += value;
    }
  }

  deleteLast() {
    if (this.expression.length > 0)
      this.expression = this.expression.substring(0, this.expression.length - 1);
  }

  clearExpression() {
    this.expression = '';
    this.result = 0;
  }

  calculate() {
    try {
      this.result = eval(this.expression);
      this.expression = '';
    } catch(e) {
      this.result = 'Error';
    }
  }
}
