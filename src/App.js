import Header from './component/Header/Header';
import Main from './component/Main/Main';
import OurTeam from './component/OurTeam/OurTeam';
import GetStarted from './component/GetStarted/GetStarted';
import GetReady from './component/GetReady/GetReady';
import Slider from './component/Slider/Slider';
import Footer from './component/Footer/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <OurTeam />
        <GetStarted />
        <GetReady />
        <Slider />
      </main>
      <Footer />
    </>
  );
}

export default App;
