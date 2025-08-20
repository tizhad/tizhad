import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  skills = [
    'Web Development',
    'UI/UX Design',
    'Mobile Development',
    'Cloud Architecture',
    'DevOps',
    'Data Science',
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A modern, scalable e-commerce solution built with cutting-edge technologies.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      image: 'assets/images/project1.jpg',
    },
    {
      title: 'Mobile App',
      description:
        'Cross-platform mobile application for productivity and collaboration.',
      tech: ['React Native', 'Firebase', 'Redux'],
      image: 'assets/images/project2.jpg',
    },
    {
      title: 'AI Dashboard',
      description:
        'Intelligent dashboard for data visualization and analytics.',
      tech: ['Python', 'TensorFlow', 'D3.js'],
      image: 'assets/images/project3.jpg',
    },
  ];
}
