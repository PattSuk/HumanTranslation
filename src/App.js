import './style/App.css';
import {Link} from 'react-router-dom';
import minion from './assets/minion.jpg'
import yoda from './assets/yoda.jpg'

function App() {
  return (
    <div className="main">
      <h1 className="main__header">Who do you want to talk to?</h1>
      <div className="main__container">
        <Link to={`/minion`} className="main__character">
          <img src={minion} alt="minion" className="main__character-img" />
          <p className="main__character-name">Minion</p>
        </Link>
        <Link to={`/yoda`} className="main__character">
          <img src={yoda} alt="yoda" className="main__character-img" />
          <p className="main__character-name">Yoda</p>
        </Link>
      </div>
    </div>
  );
}

export default App;
