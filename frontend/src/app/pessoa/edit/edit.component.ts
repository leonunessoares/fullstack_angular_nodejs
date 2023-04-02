import { Component, OnInit } from '@angular/core';

import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  pessoa: Pessoa;
  form: FormGroup;

  constructor(
    public pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPessoa'];
    this.pessoaService.find(this.id).subscribe((data: Pessoa)=>{
      this.pessoa = data;
    });

    this.form = new FormGroup({
      nome:  new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(30)])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.pessoaService.update(this.id, this.form.value).subscribe(res => {
         console.log('Pessoa atualizada com sucesso!');
         this.router.navigateByUrl('pessoa/index');
    })
  }

}
