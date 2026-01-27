import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dosha-quiz',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dosha-quiz.component.html',
    styleUrl: './dosha-quiz.component.scss'
})
export class DoshaQuizComponent {
    @Output() quizResult = new EventEmitter<string>();

    currentStep = 0;
    scores = { vata: 0, pitta: 0, kapha: 0 };

    questions = [
        {
            text: 'What is your body frame like?',
            options: [
                { text: 'Slim, bony, or light', type: 'vata' },
                { text: 'Medium, muscular, or athletic', type: 'pitta' },
                { text: 'Large, broad, or sturdy', type: 'kapha' }
            ]
        },
        {
            text: 'How is your skin type?',
            options: [
                { text: 'Dry, thin, or rough', type: 'vata' },
                { text: 'Warm, oily, or sensitive', type: 'pitta' },
                { text: 'Thick, cool, or smooth', type: 'kapha' }
            ]
        },
        {
            text: 'How do you handle stress?',
            options: [
                { text: 'I get anxious or worried', type: 'vata' },
                { text: 'I get frustrated or angry', type: 'pitta' },
                { text: 'I stay calm but can become withdrawn', type: 'kapha' }
            ]
        },
        {
            text: 'What is your appetite like?',
            options: [
                { text: 'Irregular, I often forget to eat', type: 'vata' },
                { text: 'Strong, I need to eat on time', type: 'pitta' },
                { text: 'Steady, but slow digestion', type: 'kapha' }
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
        const result = Object.entries(this.scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
        this.quizResult.emit(result);
    }

    reset() {
        this.currentStep = 0;
        this.scores = { vata: 0, pitta: 0, kapha: 0 };
    }
}
