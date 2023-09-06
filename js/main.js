var header = document.getElementById('header');
var headerContent = document.getElementById('header-content');
var main = document.getElementById('main');
var showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar;
    if(showSidebar){
        headerContent.style.marginLeft = '70%';
        headerContent.style.animationName = 'showSidebar';
        main.style.filter = 'blur(2px) brightness(0.7)';
    }
    else{
        headerContent.style.marginLeft = '130%';
        headerContent.style.animationName = 'closeSidebar';
        main.style.filter = '';
    }
}

function closeSidebar(){
    if(showSidebar)
    {
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 980 && showSidebar) 
    {  
        toggleSidebar();
    }
});