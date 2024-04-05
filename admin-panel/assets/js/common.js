
//added active class to the menu items when item is cliked and hovered

const menuItems = document.querySelectorAll('.sidebar-menu li');
const actionItems = document.querySelectorAll('.action');
const currentPage = window.location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
const sidebarMenu = document.querySelector('.sidebar');
const burgerIcon = document.querySelector('.burger-icon');
const rightArea = document.querySelector('.right-area')
const header = document.querySelector('.right-area header')

//open and close sidebar menu 
burgerIcon.addEventListener("click", () => {
    sidebarMenu.classList.add("closed")
    rightArea.style.marginLeft = '70px'
})

sidebarMenu.addEventListener('mouseenter', () => {
    sidebarMenu.classList.remove('closed');
    rightArea.style.marginLeft = '260px'
});

function activateMenuİtem() {
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].querySelector('a').getAttribute("href") === currentPage) {

            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            menuItems[i].classList.add('active')
        }
    }
}

activateMenuİtem();
const tableActions = document.querySelectorAll('.table-actions');

tableActions.forEach(function (actions) {
    actions.addEventListener('click', function () {
        const activeItem = this.closest('tr');
        const menuItems = document.querySelectorAll('.sidebar-menu li');

        menuItems.forEach(function (item) {
            item.classList.remove('active');
        });

        const currentPage = activeItem.querySelector('a').getAttribute('href');

        menuItems.forEach(function (item) {
            const menuItemLink = item.querySelector('a');
            console.log(menuItemLink);
            if (menuItemLink.getAttribute('href') === currentPage) {
                item.classList.add('active');
            }
        });
    });
});

// actionItems.forEach(element => {
//     element.addEventListener("click", (e) => {
//         e.preventDefault()
//         console.log(element.getAttribute("href"));
//         console.log(currentPage);

//         menuItems.forEach(item => {
//             console.log(item);
//             item.classList.remove('active');
//         });
//         // menuItems[i].classList.add('active')
//     })
// });


//user dropdown
const userImage = document.querySelector('.user-image')
const userSettingArea = document.querySelector('.user-setting-dropdown')

userImage.addEventListener("click", function () {
    userSettingArea.classList.toggle('d-none')
})

document.addEventListener('click', function (e) {
    if (!e.target.closest(".user-image")) {
        if (!userSettingArea.classList.contains('d-none')) {
            userSettingArea.classList.add('d-none')
        }
    }
});

