import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Court from './Page/Court/';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Court} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
