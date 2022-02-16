import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { EpisodesComponent } from './episodes.component';

describe('EpisodesComponent', () => {
  let component: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;
  let searchStore: MockStore<any>;
  let episodesStore: MockStore<any>;
  let routerStore: MockStore<any>;
  let router: Router;
  const initialState = {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesComponent ],
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({
          initialState,
        })
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EpisodesComponent);
    component = fixture.componentInstance;
    searchStore = TestBed.inject(MockStore);
    episodesStore = TestBed.inject(MockStore);
    routerStore = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be call onInit', () => {
    const spy = spyOn(routerStore, 'dispatch').and.callFake(() => {});
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should be call getCharacteres', () => {
    const spySearch = spyOn(searchStore, 'dispatch').and.callFake(() => {});
    component.getCharacteres(['url', 'url', 'url']);
    expect(spySearch).toHaveBeenCalled();
  });

  it('should be call getCharacteres', () => {
    spyOn(episodesStore, 'dispatch').and.callFake(() => {});
    const spyRouter = spyOn(router, 'navigateByUrl');
    component.getCharacteres(['url', 'url', 'url']);
    expect(spyRouter).toHaveBeenCalledWith('/episodes/episode-characters');
  });
});
