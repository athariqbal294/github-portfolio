// app.component.ts

import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Skill {
  name: string;
  icon: string; // e.g., FontAwesome class
}

interface Contact {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();

  projects: Project[] = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      image: 'assets/project1.jpg',
      link: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      image: 'assets/project2.jpg',
      link: 'https://github.com/yourusername/project-two',
    },
    // Add more projects as needed
  ];

  skills: Skill[] = [
    { name: '.NET Core / Web API', icon: 'fab fa-microsoft' },
    { name: 'Entity Framework', icon: 'fas fa-database' },
    { name: 'C#', icon: 'fas fa-code' },
    { name: 'Angular 15 / UI Libraries', icon: 'fab fa-angular' },
    { name: 'WebForm / ASP.NET MVC', icon: 'fas fa-laptop-code' },
    { name: 'JavaScript / jQuery / AJAX', icon: 'fab fa-js-square' },
    { name: 'HTML / CSS', icon: 'fab fa-html5' },
    { name: 'MS SQL / Stored Procedures', icon: 'fas fa-server' },
    { name: 'Azure Pipelines / IIS', icon: 'fab fa-microsoft' },
    { name: 'TFS / JIRA / Agile', icon: 'fas fa-tasks' }
  ];

  contact: Contact = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Handle form submission, e.g., send an email or store in a database
      console.log('Contact Form Submitted:', this.contact);
      // Reset the form
      this.contact = { name: '', email: '', message: '' };
      alert('Thank you for your message!');
    }
  }
}
