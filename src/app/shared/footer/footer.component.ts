import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="text-center">  
    <hr>
    <app-nav>
    <li class="nav-item footer-menu">
        <a class="nav-link" href="#">back to top</a>
    </li>
    </app-nav>
    <p>Copyright &copy; 2019</p>
  </div>  
  
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
