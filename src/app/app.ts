import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  protected title = 'welcome';
  hintText: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/hint.txt', { responseType: 'text' }).subscribe((data) => {
      this.hintText = data;
    });
  }
}
