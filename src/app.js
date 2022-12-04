import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import 'bootstrap';
import './component/custom-navbar';
// eslint-disable-next-line import/no-useless-path-segments
import main from '../src/view/main';
import card from './view/card';

card();
document.addEventListener('DOMContentLoaded', main);
