import { WanowaSite2017Page } from './app.po';

describe('wanowa-site-2017 App', function() {
  let page: WanowaSite2017Page;

  beforeEach(() => {
    page = new WanowaSite2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
