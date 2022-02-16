import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LocationsComponent } from './locations.component';


describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;
  let searchStore: MockStore<any>;
  let locationsStore: MockStore<any>;
  let routerStore: MockStore<any>;
  let router: Router;
  const initialState = {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsComponent ],
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({
          initialState,
        }),
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    searchStore = TestBed.inject(MockStore);
    locationsStore = TestBed.inject(MockStore);
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

  it('shoud be call getCharacters', () => {
    const spySearch = spyOn(searchStore, 'dispatch').and.callFake(() => {});
    spyOn(router, 'navigateByUrl');
    component.getCharacters(['url', 'url', 'url']);
    expect(spySearch).toHaveBeenCalled();
  });
  
  it('shoud be call getCharacters', () => {
    spyOn(locationsStore, 'dispatch').and.callFake(() => {});
    const spyRouter = spyOn(router, 'navigateByUrl');
    component.getCharacters(['url', 'url', 'url']);
    expect(spyRouter).toHaveBeenCalledWith('/locations/location-characters');
  });
});
