// index.js is the 1st file to execute

import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

/* 
    createRoot is used tell React that the div with id = "root" should be the root of our React application
    = the main place where React application gets rendered to.
    Then, with method getElementById, the content or what's inside div "root" will be replaced by:
    root.render(<App />)
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
