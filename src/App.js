import { Home } from "./Home";
import { About } from "./About";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { Profiles } from "./Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <hr />

      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profiles} />
    </div>
  );
}

export default App;
