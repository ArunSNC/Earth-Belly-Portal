import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoshaQuizComponent } from './components/dosha-quiz/dosha-quiz.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PlansComponent } from '../../shared/components/plans/plans.component';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule, DoshaQuizComponent, PackagesComponent, PlansComponent],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class AyurvedicDietPage {
  showQuiz = false;
  quizResult: string | null = null;
  expandedDosha: string | null = null;

  doshas = [
    {
      id: 'vata',
      name: 'Vata',
      elements: 'Ether & Air',
      description: 'Creative, energetic, and spontaneous. Needs grounding, warm foods.',
      color: '#AAB7A2',
      image: 'assets/images/vata.png',
      longDesc: 'Vata is characterized by the mobile nature of Wind energy. When in balance, Vata types are creative and visionary. When out of balance, they may experience anxiety, insomnia, or digestive irregularity. To stay balanced, prioritize routine, warm cooked meals, and grounding activities like slow yoga.',
      advice: ['Eat warm, moist foods', 'Maintain a regular sleep schedule', 'Avoid cold, raw foods in winter']
    },
    {
      id: 'pitta',
      name: 'Pitta',
      elements: 'Fire & Water',
      description: 'Focused, intelligent, and determined. Needs cooling, moderate foods.',
      color: '#C27A5B',
      image: 'assets/images/pitta.png',
      longDesc: 'Pitta is the energy of transformation, represented by Fire and Water. Balanced Pitta types are strong leaders and effective communicators. Imbalance can lead to irritability, inflammation, or heartburn. Balance Pitta by keeping cool, avoiding spicy foods, and practicing moderation.',
      advice: ['Prioritize cooling foods like cucumber and mint', 'Avoid intense heat and peak sun hours', 'Practice compassion and patience']
    },
    {
      id: 'kapha',
      name: 'Kapha',
      elements: 'Water & Earth',
      description: 'Stable, compassionate, and loyal. Needs stimulating, light foods.',
      color: '#4A3C31',
      image: 'assets/images/kapha.png',
      longDesc: 'Kapha provides the protective and structural energy of Earth and Water. Healthy Kapha types are patient, loving, and stable. Out of balance, they may experience lethargy, weight gain, or sinus congestion. Stimulate Kapha with vigorous exercise, light foods, and variety.',
      advice: ['Eat light, spicy, and bitter foods', 'Exercise daily and stay active', 'Avoid heavy, oily, and sweet foods']
    }
  ];

  onQuizResult(result: string) {
    this.quizResult = result;
    this.showQuiz = false;
    // Scroll to result
    setTimeout(() => {
      document.getElementById('dosha-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  toggleDosha(id: string) {
    this.expandedDosha = this.expandedDosha === id ? null : id;
  }
}
