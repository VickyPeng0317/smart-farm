import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskInfoDialogComponent } from './view-task-info-dialog.component';

describe('ViewTaskInfoDialogComponent', () => {
  let component: ViewTaskInfoDialogComponent;
  let fixture: ComponentFixture<ViewTaskInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
