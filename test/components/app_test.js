import { renderComponent, expect } from '../test_helper';
import App from '../../app/scripts/components/app';


// Use describe to group together similar tests
describe('App', () => {

  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {

    // create an instance of App
    const component = renderComponent(App);

    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain('Create');

  });

});
