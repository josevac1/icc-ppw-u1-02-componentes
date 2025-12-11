import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('02-ui-componentes');

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setDefaultSeo();
  }
}
