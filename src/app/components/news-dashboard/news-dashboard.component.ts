import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-dashboard.component.html',
  styleUrl: './news-dashboard.component.css'
})
export class NewsDashboardComponent {
  newsArticles: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe((data) => {
      this.newsArticles = data.articles;
    });
  }
}
