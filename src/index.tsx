import { h, render } from 'preact';
import Playground from './playground';
import './style.css';

render(
  <div>
    <Playground/>
  </div>,
  document.getElementById('root')
);
