import {ActivatedRoute, NavigationEnd, Router, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {AuthGuard} from "./guard/auth.guard";
import {Role} from "./models/role.enum";
import {UnauthorizedrolComponent} from "./demo/components/unauthorizedrol/unauthorizedrol.component";
import {AuthenticationService} from "./demo/service/authentication.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate: [AuthGuard], data: { roles: [Role.USER,Role.PM,Role.ADMIN] }},
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate: [AuthGuard], data: { roles: [Role.USER,Role.PM,Role.ADMIN] }},

                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule), canActivate: [AuthGuard],data: { roles: [Role.USER,Role.PM,Role.ADMIN] } },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) , canActivate: [AuthGuard], data: { roles: [Role.USER,Role.PM,Role.ADMIN]  }},
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule), canActivate: [AuthGuard], data: { roles: [Role.USER,Role.PM,Role.ADMIN]  } },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: 'unauthorizedrol',  component:UnauthorizedrolComponent},
            { path: '**', redirectTo: '/notfound' },

        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(private router: Router,private authenticationService:AuthenticationService,private activatedRoute: ActivatedRoute) {
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd && event.url) {

                if (localStorage.getItem('currentUser')){
                    console.log('login olundu ');

                }else{

                    console.log('oturum kapatıldı'+event.url);


                }

                // authenticationService.logOut();
            }
        });

        this.activatedRoute.paramMap.subscribe((params) => {
            const codeParam = params.get('code');
            console.log('code parametresi:', codeParam);
        });

    }
}
