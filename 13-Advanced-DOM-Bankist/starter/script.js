'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))

// header.before(message);
// header.after(message);

// delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
});



btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  
  // scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  section1.scrollIntoView({behavior: "smooth"})

});

// page navigation

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: "smooth"})
//   })
// })

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
})

// Tabbed component


tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  if(!clicked) return;

  // remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabContent.forEach(c => c.classList.remove('operations__content--active'));

  // activate tab
  clicked.classList.add('operations__tab--active');


  // activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');
})

// Menu fade animation
const handleHover = function (e) {
  
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

// nav.addEventListener('mouseover', function(e){handleHover(e, 0.5)});
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1))

// Sticky nav
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry)
//   })
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;


const stickyNav = function(entries){
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header)

// Reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;

  entries.forEach(entry => {
    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target)
  });
  
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer){
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
 
  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '+200px'
});

imgTargets.forEach(img => imgObserver.observe(img));


// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('Window alert')
// }

// h1.addEventListener('mouseenter', alertH1)

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.addEventListener('mouseenter', function(e) {
//   alert('alert')
// });

// h1.onmouseenter = function (e) {
//   alert('onmouse');
// }

// const randomInt = (min, max) => Math.floor(Math.random() * (max-min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);
// })

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// })

// dom traversing
// const h1 = document.querySelector('h1');

// // Going downwards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'blue';

// // up wards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

