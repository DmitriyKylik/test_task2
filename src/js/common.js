import $ from 'jquery';
import fullpageConfigInit from './configs/fullpage.config';

$(document).ready(function() {
    const $fullPage = $('#fullpage');
    fullpageConfigInit($fullPage);
});
