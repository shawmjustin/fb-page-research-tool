import { TestBed, inject } from '@angular/core/testing';

import { FacebookPostsService } from './facebook-posts.service';

describe('FacebookPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookPostsService]
    });
  });

  it('should be created', inject([FacebookPostsService], (service: FacebookPostsService) => {
    expect(service).toBeTruthy();
  }));
});
