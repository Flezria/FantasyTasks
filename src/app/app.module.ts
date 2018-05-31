import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Semantic
import { SuiModule } from 'ng2-semantic-ui';

//Services
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { TodoitemService } from './services/todoitem.service';

//Components
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TodoItemTemplateComponent } from './todo-item-template/todo-item-template.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SignupPageComponent,
    MenuComponent,
    ProfilepageComponent,
    LoginPageComponent,
    TodoItemTemplateComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    SuiModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [
    AuthGuard,    
    AuthService,
    TodoitemService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
