import './index.scss';

function Layout(props) {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}

export default Layout;
