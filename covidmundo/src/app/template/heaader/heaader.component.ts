import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/views/modal/modal.component';

@Component({
  selector: 'app-heaader',
  templateUrl: './heaader.component.html',
  styleUrls: ['./heaader.component.css']
})
export class HeaaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openModal(): void {
    this.dialog.open(ModalComponent, {
    });
  }


}
