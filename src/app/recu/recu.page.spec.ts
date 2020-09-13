import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuPage } from './recu.page';

describe('RecuPage', () => {
  let component: RecuPage;
  let fixture: ComponentFixture<RecuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
