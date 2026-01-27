import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    @ViewChild('hero') heroElement!: ElementRef;

    categories = [
        {
            title: 'Ayurvedic Diet',
            description: 'Nourish your body according to your unique constitution.',
            image: 'assets/images/ayurvedic_diet.png',
            link: '/diet'
        },
        {
            title: 'Mindfulness',
            description: 'Cultivate presence and inner peace in every moment.',
            image: 'assets/images/mindfulness.png',
            link: '/wellness'
        },
        {
            title: 'Guilt-Free Food',
            description: 'Indulge mindfully with wholesome, natural ingredients and recipes.',
            image: 'assets/images/food.png',
            link: '/food'
        }
    ];

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scroll = window.scrollY;
        if (this.heroElement) {
            const hero = this.heroElement.nativeElement;
            const bg = hero.querySelector('.hero-bg');
            const content = hero.querySelector('.hero-content');

            bg.style.transform = `translateY(${scroll * 0.5}px)`;
            content.style.transform = `translateY(${scroll * 0.2}px)`;
            content.style.opacity = `${1 - scroll / 600}`;
        }

        this.checkScroll();
    }

    ngAfterViewInit() {
        this.checkScroll();
    }

    checkScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
}
