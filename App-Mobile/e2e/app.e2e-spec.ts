import { AppMobilePage } from './app.po';

describe('app-mobile App', () => {
  let page: AppMobilePage;

  beforeEach(() => {
    page = new AppMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
