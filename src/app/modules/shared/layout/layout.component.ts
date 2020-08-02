import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { Router } from '@angular/router';
// import { ClarityIcons } from '@clr/icons';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  mobileQuery: MediaQueryList;
  showSpinner: boolean;
  userName: string;
  isAdmin: boolean = true;

  alerts: boolean = false;

  snavOpened: boolean = true;

  collapsed: boolean = true;

  user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    this.authService.logIn()
      .then( data => {
        // console.log(data)
        this.isAdmin = data.user.is_admin;
        console.log(this.isAdmin)
      })
      .catch( error => {
        this.router.navigate(['/auth/login']);
      })
    // console.log(ClarityIcons.get())
    // ClarityIcons.add({
    //   'terraform': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 80.8" width="2228" height="2500"><style>.st0{fill:#000}</style><g id="XMLID_8_"><path id="XMLID_21_" class="st0" d="M25.4 14.3l21.4 12.4v24.7L25.4 39z"/><path id="XMLID_20_" class="st0" d="M50.6 26.7L72 14.3V39L50.6 51.4z"/><path id="XMLID_19_" class="st0" d="M0 0l21.4 12.4v24.7L0 24.7z"/><path id="XMLID_18_" class="st0" d="M25.4 43.7L46.8 56v24.8L25.4 68.4z"/></g></svg>',
    //   'ansible': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 65" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><use xlink:href="#A" x=".5" y=".5"/><symbol id="A" overflow="visible"><g stroke="none" fill-rule="nonzero"><path d="M64 32c0 17.674-14.326 32-32 32S0 49.674 0 32 14.328 0 32 0s32 14.328 32 32" fill="#1a1918"/><path d="M32.54 19.548l8.28 20.438-12.508-9.853zm14.7 25.147L34.512 14.04c-.364-.884-1.1-1.352-1.973-1.352s-1.664.468-2.028 1.352L16.52 47.664h4.783L26.837 33.8l16.515 13.343c.664.537 1.144.78 1.767.78 1.248 0 2.338-.936 2.338-2.286 0-.22-.078-.57-.218-.944z"/></g></symbol></svg>'
    // })
  }

  ngOnInit(): void {


  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/auth/login']);
  }

}
