import Home from './Home'
import Navbar from '../Components/Navbar'


function App() {
  return (
    <div style={mainStyle}>
        <Navbar/>
        <Home/>
    </div>
  );
}

const mainStyle = {
  width: '100vw',
  height: '100vh',
  background: '#2f3e46'
}

export default App;
