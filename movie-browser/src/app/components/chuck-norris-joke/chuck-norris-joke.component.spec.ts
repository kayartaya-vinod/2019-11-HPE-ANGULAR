import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisJokeComponent } from './chuck-norris-joke.component';

describe('ChuckNorrisJokeComponent', () => {
  let component: ChuckNorrisJokeComponent;
  let fixture: ComponentFixture<ChuckNorrisJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckNorrisJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
