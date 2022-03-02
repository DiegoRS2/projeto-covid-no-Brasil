import { Pessoa } from './../../services/covid.model';
import { CovidService } from './../../services/covid.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  pessoa: Pessoa = {
    name: '',
    email: '',
    telefone: null,
    senha: ''
  }

  constructor(
    private dialogRef: MatDialog,
    private covidservice: CovidService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  cancelar(): void {
    this.dialogRef.closeAll();
  }
  cadastro() {
    if (this.pessoa.name == "" || this.pessoa.email == "" || this.pessoa.telefone == null || this.pessoa.senha == '') {
      this.openSnackBar('Ops, estão faltando alguns dados por favor, preencha todos os campos');
    }
    else {
      this.covidservice.cadastro(this.pessoa).subscribe(() => {
        this.openSnackBar('Cadastro realizado com sucesso!!!');
        this.cancelar();
      });
    }
  }
  openSnackBar(msg: string) {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
}
