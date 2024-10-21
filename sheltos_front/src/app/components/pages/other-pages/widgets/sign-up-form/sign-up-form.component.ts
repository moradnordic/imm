
import { Component } from '@angular/core';
import { FeatherIconsComponent } from "../../../../../shared/components/ui/feather-icons/feather-icons.component";
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms'; // Pour gérer le formulaire
@Component({
    selector: 'app-sign-up-form',
    standalone: true,
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss'],
    imports: [FeatherIconsComponent, CommonModule, RouterModule, ReactiveFormsModule,FormsModule] // Ajout du ReactiveFormsModule
})
export class SignUpFormComponent {
  public isShow: boolean = false;
  public inputType: string = 'password';

  signUpForm: FormGroup; 

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  showPassword() {
    this.isShow = !this.isShow;
    this.inputType = this.isShow ? 'text' : 'password';
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      this.http.post('http://localhost:8000/api/register', formData).subscribe({
        next: (response) => console.log('Inscription réussie', response),
        error: (error) => {
          console.error('Erreur lors de l\'inscription', error);

          if (error.status === 422) {
            console.log('Erreurs de validation :', error.error.errors); // Laravel renvoie souvent des erreurs de validation sous cette forme
          }
        }
      });
    } else {
      console.error('Formulaire invalide');
    }
  }
}


















// import { Component } from '@angular/core';
// import { FeatherIconsComponent } from "../../../../../shared/components/ui/feather-icons/feather-icons.component";
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//     selector: 'app-sign-up-form',
//     standalone: true,
//     templateUrl: './sign-up-form.component.html',
//     styleUrls: ['./sign-up-form.component.scss'],
//     imports: [FeatherIconsComponent,CommonModule,RouterModule]
// })
// export class SignUpFormComponent {

//   public isShow: boolean = false;
//   public inputType: string = 'password';

//   showPassword(){
//     this.isShow =! this.isShow;
//     if(this.isShow){
//       this.inputType = 'text'
//     }else{
//       this.inputType ='password'
//     }
//   }
// }

