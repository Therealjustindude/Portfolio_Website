import './App.scss';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';


const Home = lazy(() => import('./components/Home'));
const Navbar = lazy(() => import('./components/Navbar'));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(routerProps) => <Home history={routerProps} />}
        />
      </Switch>
    </Suspense>
  );
}

export default App;
