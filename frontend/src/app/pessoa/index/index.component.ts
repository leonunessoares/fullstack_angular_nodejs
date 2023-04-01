import { Component,OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent  implements OnInit  {
  pessoas: Pessoa[] = [];

  // constructor() { }
  constructor(public pessoaService: PessoaService,private router: Router) { }

  ngOnInit(): void {
    this.pessoaService.getAll().subscribe((data: Pessoa[])=>{
      this.pessoas = data;
      console.log(this.pessoas);
    })
  }

  deletePessoa(id: number){
    this.pessoaService.delete(id).subscribe(res => {
         this.pessoas = this.pessoas.filter(item => item.id !== id);
         console.log('Pessoa excluída com sucesso!');
    })
  }
}
