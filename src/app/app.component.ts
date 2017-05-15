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
  offsetX: number;
  maxOffset: number;
  active: number;
  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.offsetX = 0;
    this.active = 1;
    const navs = this.createNavigationButtons();
    navs.forEach(v => {
      this.element.appendChild(v);
    });
    this.items = this.element.children;
    this.maxOffset = ((this.items.length - 2) * this.element.clientWidth) - this.element.clientWidth;
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
      
    }
  }

  private navigateRight = (e: Event) => {
    if (this.offsetX < this.maxOffset) {
      (this.items[0] as HTMLDivElement).style.marginLeft = -(Math.abs(this.offsetX) + this.element.clientWidth) + 'px';
      this.offsetX -= this.element.clientWidth;
    }


  }
}

@Directive({
  selector: 'arc-carousel-item, [arc-carousel-item]'
})
export class ArcCarouselItem {

}
