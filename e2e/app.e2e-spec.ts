import { FacebookPageResearchToolPage } from './app.po';

describe('facebook-page-research-tool App', () => {
  let page: FacebookPageResearchToolPage;

  beforeEach(() => {
    page = new FacebookPageResearchToolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
