import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  closeResult = '';
  fullName: string = 'Test';
  @Input() pageName = '';
  @Output() userName = new EventEmitter<string>();
  modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal) {}
  
  open(content:  any) {
    this.modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  dismiss() {
    this.modalRef.close();
  }

  onSubmit(f: NgForm) {
    this.userName.emit(f.value.fullName);
  }
}
