import { TestBed } from '@angular/core/testing';

import { VideoService } from './video.service';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should take all films from db ', () => {
    const response: IResponseVideo[] = service.getFilmsVideos();
    expect(response).toBeInstanceOf(Array<IResponseVideo>);
  });

  it('should take all Serie from db ', () => {
    const response: IResponseVideo[] = service.getSeriesTVVideos();
    expect(response).toBeInstanceOf(Array<IResponseVideo>);
  });


});
