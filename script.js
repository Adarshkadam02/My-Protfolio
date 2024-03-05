// <!--nav - menu-- >

const changeButton = document.getElementById("changeButton");
const heading = document.querySelector("h1");

changeButton.addEventListener("click", function () {
    heading.classList.toggle("button-clicked");
});

// <!--nav - bar anime of bottom border-- >

// Get all the navigation links
var navLinks = document.querySelectorAll('.nav-link');

// Add a click event listener to each link
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Remove the "active" class from all links
        navLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
            var parentLi = navLink.parentElement;
            parentLi.style.borderBottom = ''; // Reset border
        });

        // Add the "active" class to the clicked link
        link.classList.add('active');
        var parentLi = link.parentElement;
        parentLi.style.borderBottom = '1.5px solid #fff';
    });
});

// Add a mouseenter event listener to each section to activate the corresponding link
var sections = document.querySelectorAll('section');
sections.forEach(function (section) {
    section.addEventListener('mouseenter', function () {
        var sectionId = section.getAttribute('id');
        var correspondingLink = document.querySelector('a[href="#' + sectionId + '"]');
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            var parentLi = link.parentElement;
            parentLi.style.borderBottom = ''; // Reset border
        });

        correspondingLink.classList.add('active');
        var parentLi = correspondingLink.parentElement;
        parentLi.style.borderBottom = '1.5px solid #fff';
    });

    // Add a mouseleave event listener to each section to remove the "active" class
    section.addEventListener('mouseleave', function () {
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            var parentLi = link.parentElement;
            parentLi.style.borderBottom = ''; // Reset border
        });
    });
});


// <!--headtxt - anime-- >

const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxTranslation = Math.min(scrollPosition / 10, 8); // Limit the translation to 4vw
    const translateX = `${maxTranslation}vw`;

    text1.style.transform = `translateX(${translateX})`;
    text2.style.transform = `translateX(-${translateX})`;
});



// <!--bg stars-- >

const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 5 + 1}s`; // Varying animation durations for a random effect
    starsContainer.appendChild(star);
}



// <!--project - anime-- >
// < !--col1 -->


const col1 = document.querySelector('.col1');

const observer1 = new IntersectionObserver((entries, observer1) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            col1.classList.add('animate');
        }
        else {
            col1.classList.remove('animate');
        }
    });
}, {
    threshold: 0.2, // Adjust the threshold as needed
});

observer1.observe(col1);


// <!--col2 -->

const col2 = document.querySelector('.col2');

const observer2 = new IntersectionObserver((entries, observer2) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            col2.classList.add('animate');
        }
        else {
            col2.classList.remove('animate');

        }
    });
}, {
    threshold: 0.2, // Adjust the threshold as needed
});
observer2.observe(col2);


// <!--col3-->

const col3 = document.querySelector('.col3');

const observer3 = new IntersectionObserver((entries, observer3) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            col3.classList.add('animate');
        }
        else {
            col3.classList.remove('animate');
        }

    });
}, {
    threshold: 0.2, // Trigger the animation when any part of the element is in the viewport
});

observer3.observe(col3);



// <!--col4 -->

const col4 = document.querySelector('.col4');

const observer4 = new IntersectionObserver((entries, observer4) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            col4.classList.add('animate');
        }
        else {
            col4.classList.remove('animate');
        }

    });
}, {
    threshold: 0.2, // Trigger the animation when any part of the element is in the viewport
});

observer4.observe(col4);



// <!--aboutsec -->
// < !--profile -->

const profile = document.querySelector('.profile');

const observerr1 = new IntersectionObserver((entries, observerr1) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            profile.classList.add('animeprofile');
        } else {
            profile.classList.remove('animeprofile');
        }
    });
}, {
    threshold: 0.2, // Trigger the animation when any part of the element is in the viewport
});

observerr1.observe(profile);


// <!--laptop -->

const laptop = document.querySelector('.laptop');

const observerr2 = new IntersectionObserver((entries, observerr2) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            laptop.classList.add('animelaptop');
        } else {
            laptop.classList.remove('animelaptop');
        }
    });
}, {
    threshold: 0.2, // Trigger the animation when any part of the element is in the viewport
});

observerr2.observe(laptop);



// <!--slide left-- >


const elements = document.querySelectorAll('.element');
// const elementss = document.querySelectorAll('.line-l');

const obs_1 = new IntersectionObserver((entries, obs_1) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-left');
        } else {
            entry.target.classList.remove('animate-slide-left');
        }
    });
}, {
    threshold: 0, // Trigger the animation when any part of the element is in the viewport
});

elements.forEach((elements) => {
    obs_1.observe(elements);
});


// <!--slide left line-- >


const elementss = document.querySelectorAll('.line-l');

const obs_2 = new IntersectionObserver((entries, obs_2) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-line-l');
        } else {
            entry.target.classList.remove('animate-line-l');
        }
    });
}, {
    threshold: 0, // Trigger the animation when any part of the element is in the viewport
});



elementss.forEach((elementss) => {
    obs_2.observe(elementss);
});




// <!--anime card - new -- >

const cardElements = document.querySelectorAll('.card-n');

const obss = new IntersectionObserver((entries, obss) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: .2, // Trigger the animation when any part of the element is in the viewport
});

cardElements.forEach((cardElement) => {
    obss.observe(cardElement);
});



// <!--timeline - cont - anime-- >

const elem = document.querySelectorAll('.opac-anime');

const obs_3 = new IntersectionObserver((entries, obs_3) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-opac-anime');
        } else {
            entry.target.classList.remove('animate-opac-anime');
        }
    });
}, {
    threshold: 0, // Trigger the animation when any part of the element is in the viewport
});



elem.forEach((elem) => {
    obs_3.observe(elem);
});

