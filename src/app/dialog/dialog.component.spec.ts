import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';

// Mock class for NgbModalRef
export class MockNgbModalRef {
    componentInstance = {
        prompt: undefined,
        title: undefined
    };
    result: Promise<any> = new Promise((resolve, reject) => resolve(true));
}

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let modalService: NgbModal;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      providers: [NgbModal],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    spyOn(modalService,'open').and.callThrough();
    const openModalEle= fixture.debugElement.nativeElement.querySelector('#show-dialog');
    openModalEle.click();
    expect(modalService.open).toHaveBeenCalled();
  });

  it('should emit username', () => {
    const openModalEle= fixture.debugElement.nativeElement.querySelector('#submit');
    openModalEle.click();
    expect(component.userName.emit).toHaveBeenCalled();
  })
});
