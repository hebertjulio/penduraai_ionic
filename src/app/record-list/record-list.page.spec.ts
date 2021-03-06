import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordListPage } from './record-list.page';


describe('RecordListPage', () => {
  let component: RecordListPage;
  let fixture: ComponentFixture<RecordListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecordListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
