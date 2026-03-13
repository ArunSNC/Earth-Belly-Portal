import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MindStateQuizComponent } from './components/mind-state-quiz/mind-state-quiz.component';

@Component({
  selector: 'app-wellness',
  standalone: true,
  imports: [CommonModule, MindStateQuizComponent],
  templateUrl: './wellness.component.html',
  styleUrl: './wellness.component.scss'
})
export class WellnessComponent {
  showQuiz = false;
  quizResult: string | null = null;
  expandedState: string | null = null;

  mindStates = [
    {
      id: 'sattva',
      name: 'Sattva',
      elements: 'Purity & Harmony',
      description: 'Clear, calm, and enlightened. The state of balance and peace.',
      color: '#AAB7A2',
      image: 'assets/images/spirituality.png', 
      longDesc: 'Sattva is the quality of light, love, purity, and clarity. When Sattva is dominant, a person feels happy, content, and spiritually connected. Cultivating Sattva is the goal of Ayurvedic wellness.',
      advice: ['Eat fresh, light, and easily digestible foods', 'Practice daily meditation and mindfulness', 'Spend time in nature and cultivate positive thoughts']
    },
    {
      id: 'rajas',
      name: 'Rajas',
      elements: 'Action & Passion',
      description: 'Active, restless, and driven. The energy of movement and desire.',
      color: '#C27A5B',
      image: 'assets/images/yoga_hero.png', 
      longDesc: 'Rajas is the energy of action, change, and movement. While necessary for achieving goals, excess Rajas leads to stress, anxiety, and over-attachment. Balance Rajas by slowing down and grounding oneself.',
      advice: ['Avoid overly spicy, stimulating, or caffeine-rich foods', 'Practice restorative yoga and calming breathwork', 'Schedule regular downtime to disconnect and relax']
    },
    {
      id: 'tamas',
      name: 'Tamas',
      elements: 'Inertia & Heaviness',
      description: 'Sluggish, lethargic, and resistant. The energy of rest and stagnation.',
      color: '#4A3C31',
      image: 'assets/images/ayurvedic_diet.png', 
      longDesc: 'Tamas represents inertia, heaviness, and rest. It is needed for sleep, but in excess, it causes depression, lethargy, and mental cloudiness. Overcome Tamas through gentle stimulation and activity.',
      advice: ['Eat warm, lightly spiced, and freshly cooked meals', 'Engage in invigorating exercise and dynamic movement', 'Set clear routines to stay motivated and avoid oversleeping']
    }
  ];

  onQuizResult(result: string) {
    this.quizResult = result;
    this.showQuiz = false;
    // Scroll to result
    setTimeout(() => {
      document.getElementById('mind-state-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  toggleState(id: string) {
    this.expandedState = this.expandedState === id ? null : id;
  }

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
