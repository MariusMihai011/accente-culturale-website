import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//   protected title = 'Accente Culturale';
//   email = "accenteculturalecristian@gmail.com"
//   phone = "0721246424"
//   address = "Strada Ghimbavului 40A, Cristian, Brașov"
//   highlightedSection: string | null = null;

// highlightSection(id: string) {
//   // Scroll smoothly to the section
//   const el = document.getElementById(id);
//   if (el) {
//     el.scrollIntoView({ behavior: 'smooth' });
//   }

//   // Highlight the section title (the <h1> inside the section)
//   this.highlightedSection = id;

//   // Remove highlight after 1 second
//   setTimeout(() => {
//     this.highlightedSection = null;
//   }, 1000);
// }
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
