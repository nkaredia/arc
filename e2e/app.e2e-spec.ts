import { ArcPage } from './app.po';

describe('arc App', () => {
  let page: ArcPage;

  beforeEach(() => {
    page = new ArcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
