import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitsy-comp',
  standalone: true,
  imports: [],
  templateUrl: './bitsy-comp.component.html',
  styleUrl: './bitsy-comp.component.css'
})
export class BitsyCompComponent implements OnInit{
  totalAngularPackages: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
}
