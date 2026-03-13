import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mind-state-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mind-state-quiz.component.html',
  styleUrl: './mind-state-quiz.component.scss'
})
export class MindStateQuizComponent {
  @Output() quizResult = new EventEmitter<string>();

  currentStep = 0;
  scores = { sattva: 0, rajas: 0, tamas: 0 };

  questions = [
    {
      text: 'How do you usually feel when you wake up?',
      options: [
        { text: 'Fresh, rested, and ready for the day', type: 'sattva' },
        { text: 'Restless, already thinking about my to-do list', type: 'rajas' },
        { text: 'Dull, lethargic, and wanting to sleep more', type: 'tamas' }
      ]
    },
    {
      text: 'How would you describe your mind generally?',
      options: [
        { text: 'Clear, calm, and focused', type: 'sattva' },
        { text: 'Active, restless, and constantly thinking', type: 'rajas' },
        { text: 'Cloudy, sluggish, or prone to confusion', type: 'tamas' }
      ]
    },
    {
      text: 'How do you handle difficult situations?',
      options: [
        { text: 'With patience, understanding, and a balanced approach', type: 'sattva' },
        { text: 'With frustration, striving for control, or getting angry', type: 'rajas' },
        { text: 'By avoiding them, feeling overwhelmed, or ignoring them', type: 'tamas' }
      ]
    },
    {
      text: 'What is your preferred diet?',
      options: [
        { text: 'Fresh, light, and mostly vegetarian', type: 'sattva' },
        { text: 'Spicy, rich, and intensely flavored foods', type: 'rajas' },
        { text: 'Heavy, processed, or reheated foods', type: 'tamas' }
      ]
    }
  ];

  answer(type: string) {
    (this.scores as any)[type]++;

    if (this.currentStep < this.questions.length - 1) {
      this.currentStep++;
    } else {
      this.calculateResult();
    }
  }

  calculateResult() {
    // Find the state with the highest score
    const result = Object.entries(this.scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
    this.quizResult.emit(result);
  }

  reset() {
    this.currentStep = 0;
    this.scores = { sattva: 0, rajas: 0, tamas: 0 };
  }
}
