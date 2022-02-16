import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import { CharactersComponent } from './characters.component';
import { HttpClientModule } from '@angular/common/http';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let store: MockStore<any>;
  let routerStore: MockStore<any>;
  const initialState = {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersComponent ],
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({
          initialState,
        })
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    routerStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be call onInit', () => {
    const spy = spyOn(store, 'dispatch').and.callFake(() => {});
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('shoud be call getCharacter', () => {
    component.data = [{id: 33}];
    component.getCharacter(33);
    expect(component.character).toEqual({id:33})
  });
});
