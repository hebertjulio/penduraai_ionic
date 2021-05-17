import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordCreatePage } from './record-create.page';

describe('RecordCreatePage', () => {
  let component: RecordCreatePage;
  let fixture: ComponentFixture<RecordCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
