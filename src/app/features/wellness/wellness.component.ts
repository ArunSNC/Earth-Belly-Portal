import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wellness',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wellness.component.html',
  styleUrl: './wellness.component.scss'
})
export class WellnessComponent {
  practices = [
    {
      title: 'Daily Yoga (Hatha)',
      focus: 'Balance & Grounding',
      description: 'Slow-paced stretching and breathing to stabilize Vata and Pitta energies.',
      duration: '45 mins',
      difficulty: 'Beginner'
    },
    {
      title: 'Vinyasa Flow',
      focus: 'Energy & Movement',
      description: 'Dynamic sequences to stimulate Kapha and improve cardiovascular health.',
      duration: '60 mins',
      difficulty: 'Intermediate'
    },
    {
      title: 'Pranayama',
      focus: 'Breath & Calm',
      description: 'Ancient breathing techniques to clear mental clutter and reduce stress.',
      duration: '20 mins',
      difficulty: 'All Levels'
    }
  ];

  mindfulnessPlans = [
    {
      name: '7-Day Zen Kickstart',
      price: 49,
      description: 'Perfect for beginners looking to build a consistent meditation habit.',
      features: ['Daily guided sessions', 'Breathwork basics', 'Sleep support']
    },
    {
      name: 'Holistic Spiritual Retreat',
      price: 199,
      description: 'A deep dive into self-discovery with personalized yoga and herbology.',
      features: ['Everything in Kickstart', '1:1 Spiritual coaching', 'Ayurvedic kit included']
    }
  ];
}
