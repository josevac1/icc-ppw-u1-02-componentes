import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://josevac1.github.io/icc-ppw-u1-02-componentes';
 private defaultImage = `${this.baseUrl}/assets/image.png?v=2`;



  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  setSeoMetadata(metadata: SeoMetadata) {
    const {
      title,
      description,
      image = this.defaultImage,
      url = this.baseUrl,
      type = 'website',
      keywords = 'Angular, UI, Tailwind, DaisyUI, Components',
      author = 'Jose Vanegas'
    } = metadata;

    // Actualizar título
    this.titleService.setTitle(title);

    // Meta tags básicos
    this.updateMetaTag('name', 'description', description);
    this.updateMetaTag('name', 'keywords', keywords);
    this.updateMetaTag('name', 'author', author);
    this.updateMetaTag('name', 'robots', 'index, follow');
    this.updateMetaTag('name', 'viewport', 'width=device-width, initial-scale=1');

    // Open Graph
    this.updateMetaTag('property', 'og:title', title);
    this.updateMetaTag('property', 'og:description', description);
    this.updateMetaTag('property', 'og:image', image);
    this.updateMetaTag('property', 'og:url', url);
    this.updateMetaTag('property', 'og:type', type);
    this.updateMetaTag('property', 'og:site_name', 'MV Creative Developer');

    // Twitter Card
    this.updateMetaTag('name', 'twitter:card', 'summary_large_image');
    this.updateMetaTag('name', 'twitter:title', title);
    this.updateMetaTag('name', 'twitter:description', description);
    this.updateMetaTag('name', 'twitter:image', image);
    this.updateMetaTag('name', 'twitter:url', url);

    // Canonical URL
    this.setCanonicalUrl(url);

    // Schema.org Structured Data
    this.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: description,
      url: url,
      image: {
        '@type': 'ImageObject',
        url: image
      },
      author: {
        '@type': 'Person',
        name: author
      }
    });
  }

  private updateMetaTag(
    attributeName: 'name' | 'property',
    attributeValue: string,
    content: string
  ) {
    let tag = this.metaService.getTag(`${attributeName}='${attributeValue}'`);
    if (tag) {
      this.metaService.updateTag({ [attributeName]: attributeValue, content: content });
    } else {
      this.metaService.addTag({ [attributeName]: attributeValue, content: content });
    }
  }

  private setCanonicalUrl(url: string) {
    let link = document.querySelector(`link[rel='canonical']`) as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setStructuredData(data: any) {
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }

  setDefaultSeo() {
    this.setSeoMetadata({
      title: 'MV Creative Developer | Componentes UI Angular',
      description: 'Explora componentes UI modernos creados en Angular con Tailwind CSS y DaisyUI.',
      keywords: 'Angular, UI, Tailwind, DaisyUI, Frontend, Componentes, Desarrollo Web',
      author: 'Jose Vanegas'
    });
  }
}
