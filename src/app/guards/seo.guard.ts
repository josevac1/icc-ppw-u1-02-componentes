import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Injectable({
  providedIn: 'root'
})
export class SeoGuard {
  constructor(private seoService: SeoService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const data = route.data;
    
    if (data['title'] || data['description']) {
      this.seoService.setSeoMetadata({
        title: data['title'] || 'MV Creative Developer',
        description: data['description'] || 'Componentes UI en Angular',
        url: `https://josevac1.github.io/icc-ppw-u1-02-componentes${state.url}`
      });
    }
    
    return true;
  }
}
