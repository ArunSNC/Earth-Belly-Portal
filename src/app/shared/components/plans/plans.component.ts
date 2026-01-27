import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-plans',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './plans.component.html',
    styleUrl: './plans.component.scss'
})
export class PlansComponent {
    isYearly = false;

    plans = [
        {
            name: 'Essential',
            monthlyPrice: 29,
            yearlyPrice: 240,
            features: ['Personalized Diet Plan', 'Monthly Quiz', 'Email Support']
        },
        {
            name: 'Wellness Pro',
            monthlyPrice: 59,
            yearlyPrice: 540,
            features: ['Everything in Essential', 'Weekly 1:1 Coaching', 'Full Recipe Database'],
            popular: true
        },
        {
            name: 'Holistic Transformation',
            monthlyPrice: 99,
            yearlyPrice: 900,
            features: ['Everything in Pro', 'Custom Herbal Kits', '24/7 Priority Support']
        }
    ];

    togglePlan() {
        this.isYearly = !this.isYearly;
    }
}
