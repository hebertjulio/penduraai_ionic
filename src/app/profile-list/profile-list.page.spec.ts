import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileListPage } from './profile-list.page';

describe('ProfileListPage', () => {
  let component: ProfileListPage;
  let fixture: ComponentFixture<ProfileListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
