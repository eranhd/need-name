import { MobileAppPage } from './app.po';

describe('mobile-app App', function() {
  let page: MobileAppPage;

  beforeEach(() => {
    page = new MobileAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
