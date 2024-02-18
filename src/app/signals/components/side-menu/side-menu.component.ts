import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';


interface MenuItem{
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', router: 'counter' },
    { title: 'User info', router: 'user-info' },
    { title: 'Mutaciones', router: 'properties' },
  ]);

  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', router: 'counter' },
  //   { title: 'User info', router: 'user-info' },
  //   { title: 'Mutaciones', router: 'properties' }
  // ]
}
