import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  closeResult = '';
  fullName: string = 'Test';

  constructor(private modalService: NgbModal) {}
  @Input() pageName = '';
  @Output() userName = new EventEmitter<string>();

  open(content:  any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  dismiss(modal: any) {
    modal.dismiss();
  }

  onSubmit(f: NgForm) {
    this.userName.emit(f.value.fullName);
  }
}