import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkshopService } from './services/workshop';
import { WorkshopModel } from './models/workshop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  workshopService = inject(WorkshopService)

  contactInfo = {
    phone: '+40 721 246 424',
    email: 'accenteculturalecristian@gmail.com',
    address: 'Strada Ghimbavului 40A, Cristian, jud. Brașov, 507055'
  };

  constructor() {

  }

  ngOnInit(): void {
    this.getWorkshops()
  }

  workshopList = signal<WorkshopModel[]>([]);
  getWorkshops() {
    this.workshopService.getWorkshops().subscribe({
      next: (response: WorkshopModel[]) => {
        console.log('Workshops loaded:', response);
          this.workshopList.set(response);
      },
      error: () => {
        console.error('Error loading workshops:', Error); // Add this
      }
    })
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
