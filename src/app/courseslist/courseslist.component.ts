import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-courseslist',
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <h3>Courses List</h3>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `,
})
export class CourseslistComponent {
  courses = [
    'Angular Basics',
    'Angular Pipes',
    'Angular Components',
    'Angular Routing'
  ];
}
