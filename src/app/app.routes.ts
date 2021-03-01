import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { provideRoutes } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

const APP_ROUTES = [
    { path: 'directory', component: DirectoryComponent },
    { path: '', component: HomeComponent },
    { path: '', component: NavbarComponent },
];

export const APP_ROUTES_PROVIDER = [
    provideRoutes(APP_ROUTES),
];