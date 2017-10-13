import { DfPage } from './app.po';

describe('df App', function() {
  let page: DfPage;

  beforeEach(() => {
    page = new DfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
