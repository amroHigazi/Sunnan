import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css',
})
export class LoginUserComponent {
  @Output() dataEmitter: EventEmitter<any> = new EventEmitter();
  userName:any
  submitted = false;
  message = '';
  signinForm: FormGroup;
  get f() { return this.signinForm.controls; }
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private renderer: Renderer2, private el: ElementRef,
    
  ) {
    this.signinForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      deviceSerialNumber:['']
    });
  }
  get email() {
    return this.signinForm.get(['email']);
  }
  get password() {
    return this.signinForm.get(['password']);
  }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background', 'linear-gradient(180deg, rgba(180, 234, 221, 0.91) 0%, rgba(255, 253, 232, 0.90) 100%)'); // Set background
    this.sendData() ;
  }
  loginUser(){
    this.authService.signIn(this.signinForm.value).subscribe((res) => {
    
      
      Swal.fire({
        title: "تم  تسجيل الدخول  بـــــنجــأح !",
        text: "مرحبـــــا",
        icon: "success",
      });
      this.router.navigate(['/category/list-category'])
    },
   ( (err) => {

    Swal.fire({  icon: "error",title: "خطـــاء", text: " اسم المستخدم وكلمة المرور غير متطابقان "})

   this.signinForm.reset()})
  )};
  sendData() {
    const Uname = this.userName// Replace with the actual data you want to send
    this.dataEmitter.emit(Uname);
  }
  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background'); 
  }
}
