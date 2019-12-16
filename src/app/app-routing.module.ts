import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ContentOverviewComponent } from './content-overview/content-overview.component';
import { TextContentComponent } from './text-content/text-content.component';
import { QrCodePageComponent } from './qr-code-page/qr-code-page.component';
import { LoginComponent } from './login/login.component';
import { AuthorisationGuardService } from './authorisation-guard.service';
import { RegisterComponent } from './register/register.component';
import { TextContentEditorComponent } from './text-content-editor/text-content-editor.component';

/**
 * Objekt definiert die Routen der App, bspw wird bei Eingabe von localhost:4200/overview auf
 * den Content-Overview Komponeneten gelinkt. Redirects sind auch möglich.
 */
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'start', component: QrCodePageComponent, canActivate: [AuthorisationGuardService] },
  { path: 'overview/:id', component: ContentOverviewComponent, canActivate: [AuthorisationGuardService] },
  { path: 'text-content/:id', component: TextContentComponent, canActivate: [AuthorisationGuardService] },
  { path: 'text-content-editor/:id', component: TextContentEditorComponent, canActivate: [AuthorisationGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
