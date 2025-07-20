import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  contactInfo = {
    phone: '+40 721 246 424', // Replace with actual phone
    email: 'accenteculturalecristian@gmail.com', // Replace with actual email
    address: 'Strada Ghimbavului 40A, Cristian, jud. Brașov, 507055' // Replace with actual address
  };

  // Navigation scroll method
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Download form metho

}
