import React from 'react';
import App from './App';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({ "mobiles": [], "cart": [] });

describe('App', () => {

  let app;

  beforeEach(() => {
    localStorage.setItem("username", "anmol")
    app = shallow(<App />);
  })
  afterEach(() => {
    localStorage.clear()
  })
  it('renders the App header', () => {
    expect(app.find('Header').exists()).toBe(true);

  });

  it('renders the App footer', () => {
    expect(app.find('Footer').exists()).toBe(true);

  });

  it('number of routes', () => {
    expect(app.find('Route')).toHaveLength(5);
  })

  it('renders the App Component', () => {
    expect(app.find('.App').exists()).toBe(true);

  });

  it("check username", () => {
    let username = "anmol"
    expect(app.state().username).toEqual(username);
  })


  // it("check update value function", () => {
  //   let username = "sam"
  //   app.updateValue("username", username)
  //   expect(app.state().username).toEqual(username);
  // })


})