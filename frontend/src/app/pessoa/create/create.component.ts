import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup ;

  constructor(
    public pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nome:  new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(30)])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.pessoaService.create(this.form.value).subscribe(res => {
         console.log('Pessoa criada com sucesso!');
         this.router.navigateByUrl('pessoa/index');
    })
  }

}


