import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MerchantListPage } from './merchant-list.page';


describe('MerchantListPage', () => {
  let component: MerchantListPage;
  let fixture: ComponentFixture<MerchantListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
