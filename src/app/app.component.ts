import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsDashboardComponent } from './components/news-dashboard/news-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-dashboard';
}
