import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileChoosePage } from './profile-choose.page';

describe('ProfileChoosePage', () => {
  let component: ProfileChoosePage;
  let fixture: ComponentFixture<ProfileChoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChoosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
