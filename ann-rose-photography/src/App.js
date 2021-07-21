import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import Body from './components/body'
import FooterSection from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Body />
      <FooterSection/>
    </div>
  );
}

export default App;
