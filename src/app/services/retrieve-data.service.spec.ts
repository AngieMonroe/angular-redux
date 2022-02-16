import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RetrieveDataService } from './retrieve-data.service';

describe('RetrieveDataService', () => {
  let service: RetrieveDataService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RetrieveDataService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call getCharacters', () => {
    const spy = spyOn(http, 'get').and.returnValue(of({}));
    service.getCharacters();
    expect(spy).toHaveBeenCalled();
  })

  it('should be call getLocations', () => {
    const spy = spyOn(http, 'get').and.returnValue(of({}));
    service.getLocations();
    expect(spy).toHaveBeenCalled();
  })

  it('should be call getEpisodes', () => {
    const spy = spyOn(http, 'get').and.returnValue(of({}));
    service.getEpisodes();
    expect(spy).toHaveBeenCalled();
  })

  it('should be call getCharactersArray', () => {
    const spy = spyOn(http, 'get').and.returnValue(of({}));
    service.getCharactersArray('test.url');
    expect(spy).toHaveBeenCalled();
  })
});
