import StoryContainer from "./components/StoriesContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import "./styles/reset.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <StoryContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
