import React from 'react';
// import { mount } from 'enzyme';
import App from './App';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({ "mobiles": [], "cart": [] });

describe('App', () => {

  let app = mount(<Provider store={store}><App /></Provider>);

  it('renders the App header', () => {
    expect(app.find('Header').exists()).toBe(true);

  });

  it('renders the App footer', () => {
    expect(app.find('Footer').exists()).toBe(true);

  });

  it('renders the App Component', () => {
    expect(app.find('.App').exists()).toBe(true);

  });

  // let username = "anmol"
  // localStorage.setItem("username", username)
  // // app.
  // it("check username", () => {
  //   // console.log(app.state)
  //   expect(app.state.username).toEqual(username);
  // })
  // localStorage.clear()

})