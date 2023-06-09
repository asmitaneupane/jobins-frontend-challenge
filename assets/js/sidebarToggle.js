document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const aside = document.getElementById('aside');
    const closeIcon = document.getElementById('indent-decrease');
    let isSidebarOpen = false;

    if (!hamburgerMenu || !aside || !closeIcon) {
        console.error('One or more elements not found.');
        return;
    }

    hamburgerMenu.addEventListener('click', () => {
        aside.classList.add('active');
        isSidebarOpen = true;
        console.log('Sidebar opened.');
        document.addEventListener('click', closeSidebarOnClickOutside);
    });

    closeIcon.addEventListener('click', () => {
        aside.classList.remove('active');
        isSidebarOpen = false;
        console.log('Sidebar closed.');
        document.removeEventListener('click', closeSidebarOnClickOutside);
    });

    function closeSidebarOnClickOutside(event) {
        const target = event.target;
        if (!aside.contains(target) && !hamburgerMenu.contains(target)) {
            aside.classList.remove('active');
            isSidebarOpen = false;
            console.log('Clicked outside the sidebar. Sidebar closed.');
            document.removeEventListener('click', closeSidebarOnClickOutside);
        }
    }
});