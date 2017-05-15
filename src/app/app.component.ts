import { Component, Directive, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}


@Directive({
  selector: 'arc-grid, [arc-grid]'
})
export class ArcGrid { }

@Directive({
  selector: 'arc-row, [arc-row]'
})
export class ArcRow { }

@Directive({
  selector: 'arc-col, [arc-col]'
})
export class ArcCol { }

@Directive({
  selector: 'arc-carousel, [arc-carousel]'
})
export class ArcCarousel { }

@Directive({
  selector: 'arc-carousel-navigation, [arc-carousel-navigation]'
})
export class ArcCarouselNavigation implements OnInit {
  element: Element;
  items: HTMLCollection;
  active: number;
  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.active = 1;
    const navs = this.createNavigationButtons();
    navs.forEach(v => {
      this.element.appendChild(v);
    });
    this.items = this.element.children;
  }

  private createNavigationButtons = () => {
    let left: HTMLDivElement, right: HTMLDivElement;
    left = document.createElement('div');
    left.classList.add('arc-carousel-button-left');
    left.onclick = this.navigateLeft;
    right = document.createElement('div');
    right.classList.add('arc-carousel-button-right');
    right.onclick = this.navigateRight;
    return this.createNavigationButtonsConfiguration([left, right]);
  }

  private createNavigationButtonsConfiguration = (elements: HTMLDivElement[]) => {
    elements.forEach((el) => {
      el.classList.add('arc-carousel-nav-button');
    });
    return elements;
  }


  private navigateLeft = (e: Event) => {
    if (this.active > 1) {
      this.element.scrollLeft = this.element.scrollLeft - this.items[0]['offsetWidth'];
      --this.active;
    }
  }

  private navigateRight = (e: Event) => {
    if (this.active < this.items.length) {
      this.element.scrollLeft = this.active++ * this.items[0]['offsetWidth'];
    }
  }
}

@Directive({
  selector: 'arc-carousel-item, [arc-carousel-item]'
})
export class ArcCarouselItem {

}
