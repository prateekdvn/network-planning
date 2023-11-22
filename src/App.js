import './App.css';
import logo from './image.png';
import curr from './currency.png';
import lang from './language.png';

// window.onload = init;

// function init () {
//   const map = new ol.map ({
//     view: new ol.View ({
//       center: [0,0],
//       zoom: 2
//     }),
//     layers: [
//       new ol.layers.Tile ({
//         source: new ol.source.OSM()
//       })
//     ],
//     target: 'js-map'
//   }) 
// }

function App() {
  return (
    <div className="App">
      <div className='top-bar'>
        <img src={logo} className='logo' alt='' />
        <img src={curr} className='curr' alt='' />
        <img src-={lang} className='lang' alt='' />
      </div>
    </div>
  );
}

export default App;
