// $('#fullpage').fullpage({
//     //options here
//     autoScrolling:true,
//     scrollHorizontally: true
// });

// //methods
// $.fn.fullpage.setAllowScrolling(false);

// Animation effect for section

// Config setup
const setupConfig = (wrapper) => {
    wrapper.fullpage({
        //options here
        // autoScrolling:true,
    });
};

const fullpageConfigInit = (element) => {
    setupConfig(element);
};

export default fullpageConfigInit;
