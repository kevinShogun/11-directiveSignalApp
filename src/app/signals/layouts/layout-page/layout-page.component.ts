import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SideMenuComponent],
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {}
