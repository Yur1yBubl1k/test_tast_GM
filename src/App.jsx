import './App.css';

import doorIcon from './img/door.svg';
import electricalIcon from './img/Electrical.svg';
import sofaIcon from './img/Frame 11.svg';
import homeIcon from './img/home.svg';
import instalationIcon from './img/instalation.svg';
import paintIcon from './img/paint.svg';
import pictureIcon from './img/picture.svg';
import tapIcon from './img/Tap.svg';
import outDoorIcon from './img/Дизайн без названия 1.svg';



function App() {
  return (
    <>
      <div className='container'>
        <div className='card card_green'>
          <div className='info'>
            <span className='icon'>
              {' '}
              <img src={tapIcon} alt='Kran' />
            </span>
            <h3>Plumbing</h3>
            <ul className='card_list'>
              <li>Install / Replace a Toilet</li>
              <li>Install / Replace a Faucet</li>
              <li>Fix a Leaking</li>
              <li>Install / Replace a Sink</li>
              <li>Repair Under Sink Plumbing</li>
            </ul>
          </div>
          <a href='#' className='link_more'>
            View more
          </a>
        </div>
        <div className='card card_blue'>
          <div className='info'>
            <span className='icon'>
              {' '}
              <img src={paintIcon} alt='Kran' />
            </span>
            <h3>Drywall & painting</h3>
            <ul>
              <li>Install Drywall</li>
              <li>Patch and Paint Drywall</li>
              <li>Paint a Wall / Trim</li>
              <li>Paint or Stain A Fence</li>
              <li>Paint a Cabinet Door</li>
            </ul>
          </div>
          <a href='#' className='link_more'>
            View more
          </a>
        </div>
        <div className='card card_yellow'>
          <div className='info'>
            <span className='icon'>
              {' '}
              <img src={sofaIcon} alt='Kran' />
            </span>
            <h3>Furniture assembly</h3>
            <ul>
              <li>Assemble Fitness Equipment</li>
              <li>Assemble - Custom Request</li>
              <li>Assemble a TV Stand</li>
              <li>Assemble Pet Furniture</li>
              <li>Assemble a Bar Cabinet</li>
            </ul>
          </div>
          <a href='#' className='link_more'>
            View more
          </a>
        </div>
        <div className='card card_red'>
          <div className='info'>
            <span className='icon'>
              {' '}
              <img src={electricalIcon} alt='Kran' />
            </span>
            <h3>Electrical</h3>
            <ul>
              <li>Install / Replace a Ceiling Fan</li>
              <li>Replace Switch & Outlet Faceplate</li>
              <li>Upgrade to a Video Doorbell</li>
              <li>Install / Replace an Bathroom Exhaust Fan</li>
            </ul>
          </div>
          <a href='#' className='link_more'>
            View more
          </a>
        </div>
        <div className='card card_green'>
          <div className='info'>
            <span className='icon'>
              {' '}
              <img src={doorIcon} alt='Kran' />
            </span>
            <h3>Doors & windows</h3>
            <ul>
              <li>Install / Replace New Door</li>
              <li>Install / Replace a Screen Door</li>
              <li>Install / Replace a Window Screen</li>
              <li>Repair a Door Frame</li>
            </ul>
          </div>
          <a href='#' className='link_more'>
            View more
          </a>
        </div>
        <div className='card card_blue'>
          <div className='info'>
            <span className='icon'>
              {' '}
              <img src={pictureIcon} alt='Kran' />
            </span>
            <h3>Hanging & mounting</h3>
            <ul>
              <li>Mount a TV</li>
              <li>Remove a TV Mount from Wall</li>
              <li>Mount and Hang a Projector Screen</li>
              <li>Hang a Bathroom Fixture</li>
              <li>Assemble a Bar Cabinet</li>
            </ul>
          </div>
          <a href='#' className='link_more'>
            View more
          </a>
        </div>
        <div className='card card_yellow'>
          <div className='info'>
            <span className='icon'>
              {' '}
              <img src={instalationIcon} alt='Kran' />
            </span>
            <h3>Appliance installation</h3>
            <ul>
              <li>Replace an Existing Dishwasher</li>
              <li>Replace an Existing Microwave</li>
              <li>Replace an Existing Oven </li>
            </ul>
          </div>
          <a href='#' className='link_more'>
            View more
          </a>
        </div>
        <div className='card card_red'>
          <div className='info'>
            <span className='icon'>
              {' '}
              <img src={homeIcon} alt='Kran' />
            </span>
            <h3>Smart home</h3>
            <ul>
              <li>Install a Smart Lock</li>
              <li>Install a Smart Home Security Camera</li>
              <li>Mount a Baby Monitor Camera on the Wall</li>
              <li>Install an Under Sink Water Filtration System </li>
            </ul>
          </div>
          <a href='#' className='link_more'>
            View more
          </a>
        </div>
        <div className='card card_blue'>
          <div className='info'>
            <span className='icon'>
              {' '}
              <img src={outDoorIcon} alt='Kran' />
            </span>
            <h3>Outdoor</h3>
            <ul>
              <li>Assemble an Outdoor Trampoline</li>
              <li>Hang a Garage Shelving Unit</li>
              <li>Install Outdoor Decorative Exterior Window Shutters</li>
              <li>Assemble Pet Furniture</li>
              <li>Install a Storm Door</li>
            </ul>
          </div>
          <a href='#' className='link_more'>
            View more
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
