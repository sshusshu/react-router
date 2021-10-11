import { Link, Route } from "react-router-dom";
import { Profile } from "./Profile";

export const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/sshu">sshu</Link>
        </li>
        <li>
          <Link to="/profiles/hoon">hoon</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact={true}
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};
