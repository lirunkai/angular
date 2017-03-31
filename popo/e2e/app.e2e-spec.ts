import { PopoPage } from './app.po';

describe('popo App', () => {
  let page: PopoPage;

  beforeEach(() => {
    page = new PopoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
