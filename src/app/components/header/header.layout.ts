import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'header-layout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.layout.html',
  styleUrl: './header.layout.css'
})
export class HeaderLayoutComponent {
  nameShop = 'Picolo'
  searchQuery: string = '';

  clearSearch(): void {
    this.searchQuery = ''; 
  }
}



// // Bắt sự kiện nhấp chuột vào biểu tượng
// notificationIcon.addEventListener('click', () => {
//   notification.classList.toggle('open'); // Mở/đóng danh sách thông báo
// });

// // Đóng danh sách khi click bên ngoài
// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.notification')) {
//     notification.classList.remove('open');
//   }
// });


