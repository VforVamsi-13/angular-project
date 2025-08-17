
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf, NgFor, LowerCasePipe, UpperCasePipe, CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { CourseslistComponent } from './courseslist/courseslist.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    CourseslistComponent,
    NgIf,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    PercentPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('angular-app');

  product = {
    productCode: "IPH16PRO2025",
    name: "iphone 16 pro",
    price: 129999,
    releaseDate: new Date(2025, 7, 15),
    description: "Latest iPhone with AI-powered features",
    discount: 0.15
  };
  showCoursesList = false;

  viewCoursesList() {
    this.showCoursesList = true;
  }
}
