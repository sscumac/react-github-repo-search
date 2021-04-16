import App from "./App";
import { shallow, mount } from "enzyme";
import Header from "./Components/Header";
import RepoList from "./Components/RepoList";
import RepoCard from "./Components/RepoCard";


describe("test app", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders page title correctly", () => {
    const wrapper = shallow(<Header />);
    const title = <h1>Github Repositories</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it("renders result list", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(RepoList).length).toEqual(1);
  });

  it("amount of first search results", () => {
    const wrapper = mount(<RepoList />);
    // the test should actually pass like this but for some reason there are no results to map over (according to error message)
    expect(wrapper.find(RepoCard).length).toEqual(40);
  });
});






