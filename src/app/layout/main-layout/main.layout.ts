import { Component } from '@angular/core';
import { HeaderLayoutComponent } from "../../components/header/header.layout";
import { RouterOutlet } from '@angular/router';
import { FooterLayoutComponent } from '../../components/footer/footer.layout';

@Component({
  selector: 'main-layout',
  standalone: true,
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.css',
  imports: [RouterOutlet, HeaderLayoutComponent, FooterLayoutComponent]
})
export class MainLayoutComponent {
  title = '';
}