const header = $('#header');
const headerContent = $('#header-content');
const main = $('#main');
let showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar;
    if (showSidebar) {
        headerContent.removeClass('closeSidebar');
        headerContent.addClass('showSidebar');
        main.addClass('sidebarOpen');
    } else {
        headerContent.removeClass('showSidebar');
        headerContent.addClass('closeSidebar');
        main.removeClass('sidebarOpen');
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