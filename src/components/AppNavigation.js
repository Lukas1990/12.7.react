import {NavLink} from "react-router-dom";

function AppNavigation() {
  return (
    <nav>
      <NavLink to="/">Zoznam úloh</NavLink>
      <NavLink to="weather">Predpoveď počasia</NavLink>
    </nav>
  );
}

export default AppNavigation;
