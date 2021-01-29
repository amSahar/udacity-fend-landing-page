/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/


// build the nav
const navBarFun = () => {

    const navBar=document.getElementById('navbar__list');
    const sections=document.querySelectorAll('section');

        sections.forEach(section => {
            const navLinkName = section.getAttribute("data-nav");
            const sectionId = section.getAttribute("id");

            const navLink = document.createElement('li');
            navLink.innerHTML = `<a class="menu__link" href="#${sectionId}">${navLinkName}</a>`;
            navBar.classList.add("menu__link");
            navBar.appendChild(navLink);
        });
};
navBarFun();


function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return (
        rect.top
    );
}


function toggleActive() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');

        for (section of sections) {
            const sectionOffset = isInViewport(section);
            const checkActive = (sectionOffset, section) => {
                const activeLink = document.querySelector(`a[href="#${section.getAttribute("id")}"]`);

                if (sectionOffset) {
                    section.classList.add('active-class');
                    activeLink.classList.add("menu__link--active");
                }

                else {
                    section.classList.remove('active-class');
                    activeLink.classList.remove("menu__link--active");
                };
            };
            InViewport = () => sectionOffset < 250 && sectionOffset >= -250;
            checkActive (InViewport(), section);
        }
    });
}
toggleActive();


const createBtnUp = () => {
    const htmlTextToAdd = `<a href="#" class="bottom__link ">Top</a>`;
    document.body.insertAdjacentHTML("afterbegin", htmlTextToAdd);
}
createBtnUp();
