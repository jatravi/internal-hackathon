// For the popup animation till line 38

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// About Us Container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);

ScrollReveal().reveal(".about__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
});

// Discover Container

ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".discover__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
})

// Blogs Container
ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    interval: 400,
});