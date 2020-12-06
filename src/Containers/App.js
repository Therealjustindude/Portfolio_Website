import Home from './Home'
import Navbar from '../Components/Navbar'


function App() {
  return (
    <div className="app-wrapper" style={mainStyle}>
      <Navbar />
      <Home />
    </div>
  );
}

const mainStyle = {
  width: '100%',
  height: '100%',
  background: '#2f3e46'
}

export default App;
