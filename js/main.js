const header = $('#header');
const headerContent = $('#header-content');
const main = $('#main');
let showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar;
    if(showSidebar){
        headerContent.css({
            'marginLeft': '70%',
            'animationName': 'showSidebar'
        });
        main.css({
            'filter': 'blur(2px) brightness(0.7)'
        });
    }
    else{
        headerContent.css({
            'marginLeft': '130%',
            'animationName': 'closeSidebar'
        });
        main.css({
            'filter': ''
        });
    }
}

function closeSidebar(){
    if(showSidebar) {
        toggleSidebar();
    }
}

const handleResize = () => {
    const { innerWidth } = window;
    if (innerWidth > 980 && showSidebar) {
        toggleSidebar();
    }
};