import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Modern Web Development',
      excerpt:
        'A comprehensive guide to starting your journey in web development with the latest technologies and best practices.',
      author: 'Tizhad',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Web Development',
      tags: ['JavaScript', 'React', 'Best Practices'],
      featured: true,
    },
    {
      id: 2,
      title: 'The Future of AI in Software Development',
      excerpt:
        'Exploring how artificial intelligence is transforming the way we write, test, and maintain code.',
      author: 'Tizhad',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'AI & Technology',
      tags: ['AI', 'Machine Learning', 'Development'],
      featured: false,
    },
    {
      id: 3,
      title: 'Building Scalable Applications with Microservices',
      excerpt:
        'Learn the principles and practices of designing and implementing microservices architecture.',
      author: 'Tizhad',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'Architecture',
      tags: ['Microservices', 'Docker', 'Kubernetes'],
      featured: false,
    },
    {
      id: 4,
      title: 'UI/UX Design Principles for Developers',
      excerpt:
        'Essential design principles that every developer should know to create better user experiences.',
      author: 'Tizhad',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Design',
      tags: ['UI/UX', 'Design', 'Frontend'],
      featured: false,
    },
    {
      id: 5,
      title: 'Optimizing Performance in Angular Applications',
      excerpt:
        'Practical techniques to improve the performance and user experience of your Angular apps.',
      author: 'Tizhad',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Angular',
      tags: ['Angular', 'Performance', 'Optimization'],
      featured: false,
    },
    {
      id: 6,
      title: 'DevOps Best Practices for Modern Teams',
      excerpt:
        'Streamline your development workflow with proven DevOps practices and tools.',
      author: 'Tizhad',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'DevOps',
      tags: ['DevOps', 'CI/CD', 'Automation'],
      featured: false,
    },
  ];

  categories = [
    'All',
    'Web Development',
    'AI & Technology',
    'Architecture',
    'Design',
    'Angular',
    'DevOps',
  ];
  selectedCategory = 'All';

  get filteredPosts() {
    if (this.selectedCategory === 'All') {
      return this.blogPosts;
    }
    return this.blogPosts.filter(
      (post) => post.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  trackByPostId(index: number, post: any): number {
    return post.id;
  }
}
