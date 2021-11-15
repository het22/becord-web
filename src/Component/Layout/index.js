import { URL } from '../../Util/constant';
import './index.scss';

function Layout(props) {
  return (
    <>
      <header>
        <button className="header-btn header-btn--menu" />
        <h1 className="header-title">NBA FINAL - GAME 1</h1>
        <button className="header-btn header-btn--edit" />
      </header>
      <main>{props.children}</main>
      <footer>
        <ul className="footer-menus">
          <li className="footer-menu">
            <a href={URL.NGHL_SUPPORT} target="_blank">
              NGHL
            </a>
          </li>
          <li className="footer-menu">
            <a href={URL.BECORD_SUPPORT} target="_blank">
              Help
            </a>
          </li>
          <li className="footer-menu">Report</li>
        </ul>
      </footer>
    </>
  );
}

export default Layout;
