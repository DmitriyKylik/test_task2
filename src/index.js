import './js/common';
import './css/main.css';
import './scss/main.scss';

// Require all svg icons
const files = require.context('./icons/', true, /.*\.svg$/);
files.keys().forEach(files);
