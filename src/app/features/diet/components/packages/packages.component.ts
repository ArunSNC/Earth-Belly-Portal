import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nutrition-packages',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './packages.component.html',
    styleUrl: './packages.component.scss'
})
export class PackagesComponent {
    packages = [
        {
            id: 'meal-plans',
            title: 'Ayurvedic Meal Plans',
            subtitle: 'Nutritious & Wholesome',
            description: 'Daily meal guides specifically designed for your Dosha to optimize digestion and energy.',
            image: 'assets/images/ayurvedic_diet.png',
            features: ['Daily Recipes', 'Grocery Lists', 'Portion Guidance']
        },
        {
            id: 'goal-based',
            title: 'Goal-Based Nutrition',
            subtitle: 'Result Oriented',
            description: 'Focused plans for weight loss, muscle gain, or hormonal health (PCOD/Thyroid).',
            image: 'assets/images/weight_loss.png',
            features: ['Weekly Progress Tracking', 'Metabolic Support', 'Targeted Macros']
        },
        {
            id: 'personalized',
            title: 'Personalized Coaching',
            subtitle: 'One-on-One Support',
            description: 'Direct access to nutritionists for a completely bespoke wellness journey tailored to your DNA.',
            image: 'assets/images/mindfulness.png',
            features: ['Expert Consultations', '24/7 Chat Support', 'Custom Herbology']
        }
    ];

    scroll(direction: number) {
        const container = document.querySelector('.packages-carousel');
        if (container) {
            const scrollAmount = 400;
            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    }
}
