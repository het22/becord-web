import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../../Store/Reducers/game';
import { URL } from '../../Util/constant';
import './index.scss';

function Layout(props) {
  const dispatch = useDispatch();
  const title = useSelector(({ game }) => game.title);

  useEffect(() => {
    dispatch(setTitle('NBA FINAL - GAME 1'));
  }, []);

  return (
    <>
      <header>
        <button className="header-btn header-btn--menu" />
        <h1 className="header-title">{title}</h1>
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
