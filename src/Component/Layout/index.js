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
      <footer></footer>
    </>
  );
}

export default Layout;
