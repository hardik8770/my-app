import { Component } from '@angular/core';
import { OnInIt } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInIt{
  title = 'my-app';

  ngOnInIt(){
    alert("Hello Angular ...");

  }

}
