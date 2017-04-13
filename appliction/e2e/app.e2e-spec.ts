import { ApplictionPage } from './app.po';

describe('appliction App', function() {
  let page: ApplictionPage;

  beforeEach(() => {
    page = new ApplictionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
