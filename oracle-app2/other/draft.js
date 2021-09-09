



---------------------------------------------------------------------

Testing 
https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/

npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer

setUpTest.js 
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../src/App"
configure({ adapter: new Adapter() });

App.test.js 
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-15';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
it("renders without crashing", () => {
  shallow(<App />);
});
it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const heading = <h1>Tasker</h1>;
  expect(wrapper.contains(heading)).toEqual(true);
});

npm run test
or 
npm test 

failed 

---------------------------------------------------------------------

https://jestjs.io/docs/tutorial-react

---------------------------------------------------------------------

https://www.toptal.com/react/tdd-react-unit-testing-enzyme-jest

Jest and Enzyme 

"devDependencies": {
  "enzyme": "^2.9.1",
  "jest": "^21.2.1",
  "jest-cli": "^21.2.1",
  "babel-jest": "^21.2.0"
}



---------------------------------------------------------------------

const TASK_STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

---------------------------------------------------------------------

const taskList = [...tasks, new Task(desc, date)];

// filter , create new list
const newList = tasks.map((t) => {
  if (t.id === id) {
    t.status = t.status == "pending" ? "completed" : "pending";
  }
  return t;
});
setTasks(newList);
