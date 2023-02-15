import { Component, OnInit } from '@angular/core'; 
import { SpinnerService } from '../spinner.service';
import {BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Request-Headers':'POST'
    })
  };

  isEmailSendSuccess = false;
  showContact = false;
  isSendingEmail = false;

  dataset : Details = {
    name:'',
    prenom : '',
    email:'',
    tel:'',
    message:''
  };  
  
  /**
   * constructor
   * @param http 
   * @param spinnerService 
   */
  constructor(private http: HttpClient, public spinnerService: SpinnerService, private formBuilder: FormBuilder){    
  }  

  ngOnInit() {
        this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          fprenom: ['', Validators.required],
          ftel: ['', Validators.required],
          fmessage: ['', Validators.required],
          femail: ['', [Validators.required, Validators.email,Validators.pattern('^[A-Za-z0-9_.%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]]
      });
  }

 // convenience getter for easy access to form fields
  get f() {
        if(this.registerForm != null) {
          return this.registerForm.controls; 
        }
        return undefined;
    }

  onSubmit() {
    this.submitted = true;

    if(this.registerForm != null) {      
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        console.info("Formulaire n'est pas valide")
          return;
      }
   }

    this.spinnerService.show();
    this.isSendingEmail = true;
    const headers = { 
      'Access-Control-Allow-Origin':'*',
      "Content-Type" : "application/json",
      "charset" : "UTF_8",
      "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      }  

    const body=JSON.stringify(this.dataset);
    console.info("onSubmit() =>M." + this.dataset.prenom + " "  + this.dataset.name + " - tel :" + this.dataset.tel + " email : " + this.dataset.email + " message : " + this.dataset.message );
    this.http.post<Details>('https://141.145.205.182:8443/sendMail/', this.dataset, {'headers':headers})
      .subscribe(
            (response) => {                           //Next callback
              this.spinnerService.visibility =  new BehaviorSubject<boolean>(true);
            },
            (error) => {  
              if(error.status === 200) {                
                this.isEmailSendSuccess = true;
                console.log('send email in success ');
                this.clearForm();
              }else {
                this.showContact = true;
                console.log('Oops send email in failure' , error);    
              }
              this.spinnerService.hide();
              this.isSendingEmail = false;
            }
    );
  } //end onSubmit()

  clearForm() {
    console.info("[clearForm] initialize form")
    this.dataset.name ='';
    this.dataset.prenom ='';
    this.dataset.tel ='';
    this.dataset.email ='';
    this.dataset.message ='';
  }

  showFormulaire() {
    console.log('[showFormulaire] Envoyer une autre demande activée');
    this.isEmailSendSuccess = false;
  }
}

interface Details{  
name:string;
prenom:string;
email:string;
tel:string;
message:string;
}