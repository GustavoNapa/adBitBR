import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tutorial1Page } from './tutorial1.page';

describe('Tutorial1Page', () => {
  let component: Tutorial1Page;
  let fixture: ComponentFixture<Tutorial1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tutorial1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tutorial1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
