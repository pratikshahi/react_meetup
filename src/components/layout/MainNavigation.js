import { Link } from "react-router-dom"; //same like a tag but works internally without sending req o server
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
