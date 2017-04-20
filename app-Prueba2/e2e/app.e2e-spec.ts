import { AppPruebaPage } from './app.po';

describe('app-prueba App', () => {
  let page: AppPruebaPage;

  beforeEach(() => {
    page = new AppPruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
