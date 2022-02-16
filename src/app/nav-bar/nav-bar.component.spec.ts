import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let characterStore: MockStore<any>;
  let locationsStore: MockStore<any>;
  let episodesStore: MockStore<any>;
  let searchStore: MockStore<any>;
  let router: Router;
  const initialState = {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({
          initialState,
        }),
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    characterStore = TestBed.inject(MockStore);
    locationsStore = TestBed.inject(MockStore);
    episodesStore = TestBed.inject(MockStore);
    searchStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be call getCharacters', () => {
    const spy = spyOn(characterStore, 'dispatch').and.callFake(() => {});
    component.getCharacters();
    expect(spy).toHaveBeenCalled();
  });

  it('should be call getLocations', () => {
    const spy = spyOn(locationsStore, 'dispatch').and.callFake(() => {});
    component.getLocations();
    expect(spy).toHaveBeenCalled();
  });

  it('should be call getEpisodes', () => {
    const spy = spyOn(episodesStore, 'dispatch').and.callFake(() => {});
    component.getEpisodes();
    expect(spy).toHaveBeenCalled();
  });

  it('should be call findOption', () => {
    const spy = spyOn(searchStore, 'dispatch').and.callFake(() => {});
    component.findOption([{name: 'Pedro'}, {name: 'Maria'}], 'pedro');
    expect(spy).toHaveBeenCalled();
  })
});
