class Header {
    selectors = {
        root: '[data-js-header]',
        body: '[data-js-header-body]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
        closeButton: '.header__menu-close',
        logoImages: '.header__logo img',
        phoneImages: '.header__phone-link img',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
        isScrolled: 'is-scrolled',
    }


    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.bodyElement = this.rootElement.querySelector(this.selectors.body)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.closeButtonElement = this.rootElement.querySelector(this.selectors.closeButton);
        this.logoImages = this.rootElement.querySelectorAll(this.selectors.logoImages);
        this.phoneImages = this.rootElement.querySelectorAll(this.selectors.phoneImages);
        
        this.bindEvents()
        this.onScroll();
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    

     onCloseButtonClick = () => {
        this.burgerButtonElement.classList.remove(this.stateClasses.isActive);
        this.overlayElement.classList.remove(this.stateClasses.isActive);
        document.documentElement.classList.remove(this.stateClasses.isLock);
    }



     onScroll = () => {
        const scrollY = window.scrollY;
        const header = document.querySelector('.header');
        const whiteLogo = header.querySelector('.logo__image:first-child');
        const goldLogo = header.querySelector('.logo__image:last-child');


        if (scrollY > 50) {
            this.bodyElement.classList.add(this.stateClasses.isScrolled);
            this.updateHeaderState(true);
        } else {
            this.bodyElement.classList.remove(this.stateClasses.isScrolled);
            this.updateHeaderState(false);
        }
    };
    

    updateHeaderState(isScrolled) {
        this.bodyElement.style.backgroundColor = isScrolled ? '#fff' : 'transparent';
        this.bodyElement.style.transition = 'background-color 0.3s ease';
        this.burgerButtonElement.style.color = isScrolled ? 'var(--gold)' : 'white';
        this.logoImages.forEach((img) => {
            img.style.display = img.src.includes(isScrolled ? 'logo-gold' : 'logo-white')
                ? 'block'
                : 'none';
        });

        this.phoneImages.forEach((img) => {
            img.style.display = img.src.includes(isScrolled ? 'phone-gold' : 'phone-white')
                ? 'block'
                : 'none';
        });
    }

      bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);

    if (this.closeButtonElement) {
        this.closeButtonElement.addEventListener('click', this.onCloseButtonClick);
    }
    window.addEventListener('scroll', this.onScroll);
    }

}

console.log('Hello world');
document.addEventListener('DOMContentLoaded', () => {
    new Header();
});


const heroSlider = new Swiper(".hero__swiper", {
    slidesPerGroup: 1,
    effect: "creative",
    speed: 1000,
    // loop: true,
    creativeEffect: {
        prev: {
            opacity: 0.1,
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});