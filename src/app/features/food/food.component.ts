import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  recipes = [
    {
      id: 1,
      title: 'Rainbow Quinoa Salad',
      category: 'Wholesome Meals',
      description: 'A nutrient-packed salad with pomegranate, cucumber, and mint dressing.',
      price: 12.50,
      image: 'assets/images/quinoa_salad.png',
      tags: ['Vegan', 'Gluten-Free', 'Low GI']
    },
    {
      id: 2,
      title: 'Almond Flour Cookies',
      category: 'Guilt-Free Treats',
      description: 'Soft and chewy cookies made with almond flour and dark chocolate chips.',
      price: 8.00,
      image: 'assets/images/almond_cookies.png',
      tags: ['Sugar-Free', 'Keto-Friendly']
    },
    {
      id: 3,
      title: 'Berry Chia Pudding',
      category: 'Guilt-Free Treats',
      description: 'Creamy chia pudding topped with fresh organic berries and almonds.',
      price: 6.50,
      image: 'assets/images/chia_pudding.png',
      tags: ['Superfood', 'Dairy-Free']
    }
  ];

  placeOrder(recipe: any) {
    alert(`Thank you for your interest in ${recipe.title}! Ordering functionality is coming soon. Our kitchen is currently preparing for launch.`);
  }
}
