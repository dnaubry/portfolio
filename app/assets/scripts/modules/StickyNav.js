import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

function stickyNav () {
    const nav = $('.navbar'),
        navScrolled = 'navbar--scrolled',
        headerTitleHeight = $('.site-header__titles').height(),
        headerLinks = $('.navbar a');

    $(window).scroll(addStickyClass);
    addSmoothScrolling();

    function addStickyClass () {
        if ( $(this).scrollTop() > headerTitleHeight ) {
            nav.addClass(navScrolled);
        } else {
            nav.removeClass(navScrolled);
        }
    }

    function addSmoothScrolling() {
        headerLinks.smoothScroll();
    }
}

export default stickyNav;