document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Restaurant Slideshow - only p1, p2, p3, p5
  const slides = [
    { img: 'assets/pics/p1.jpg', alt: 'Chai Kadai Interior' },
    { img: 'assets/pics/p2.jpg', alt: 'Chai Kadai Dining Area' },
    { img: 'assets/pics/p3.jpg', alt: 'Chai Kadai Counter' },
    { img: 'assets/pics/p5.jpg', alt: 'Chai Kadai Ambience' }
  ];

  const carouselInner = document.querySelector('#restaurantSlideshow .carousel-inner');
  slides.forEach((slide, index) => {
    const item = document.createElement('div');
    item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    item.innerHTML = `
      <div class="d-flex justify-content-center align-items-center" style="height: 500px; background-color: #f5f5f5;">
        <img src="${slide.img}" class="d-block" alt="${slide.alt}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
      </div>
    `;
    carouselInner.appendChild(item);
  });

  // Drinks Menu
  const drinksItems = [
    { img: 'assets/drinks/d1.jpg', title: 'Refreshing Drink 1' },
    { img: 'assets/drinks/d2.jpg', title: 'Refreshing Drink 2' },
    { img: 'assets/drinks/d3.jpg', title: 'Refreshing Drink 3' }
  ];

  const drinksContainer = document.getElementById('drinksItems');
  drinksItems.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
      </div>
    `;
    drinksContainer.appendChild(col);
  });

  // Lunch Menu
  const lunchItems = [
    { img: 'assets/lunch/l1.jpg', title: 'Lunch Special 1' },
    { img: 'assets/lunch/l2.jpg', title: 'Lunch Special 2' },
    { img: 'assets/lunch/l3.jpg', title: 'Lunch Special 3' },
    { img: 'assets/lunch/l4.jpg', title: 'Lunch Special 4' },
    { img: 'assets/lunch/l5.jpg', title: 'Lunch Special 5' }
  ];

  const lunchContainer = document.getElementById('lunchItems');
  lunchItems.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3 mb-4';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
      </div>
    `;
    lunchContainer.appendChild(col);
  });

  // Dinner Menu
  const dinnerItems = [
    { img: 'assets/dinner/d1.jpg', title: 'Dinner Special 1' },
    { img: 'assets/dinner/d2.jpg', title: 'Dinner Special 2' },
    { img: 'assets/dinner/d3.jpg', title: 'Dinner Special 3' },
    { img: 'assets/dinner/d4.jpg', title: 'Dinner Special 4' },
    { img: 'assets/dinner/d5.jpg', title: 'Dinner Special 5' }
  ];

  const dinnerContainer = document.getElementById('dinnerItems');
  dinnerItems.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3 mb-4';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
      </div>
    `;
    dinnerContainer.appendChild(col);
  });

  // Gallery Items
  const galleryItems = [
    { img: 'assets/gallery/g1.jpg', title: 'Gallery Item 1' },
    { img: 'assets/gallery/g2.jpg', title: 'Gallery Item 2' },
    { img: 'assets/gallery/g3.jpg', title: 'Gallery Item 3' },
    { img: 'assets/gallery/g4.jpg', title: 'Gallery Item 4' },
    { img: 'assets/gallery/g5.jpg', title: 'Gallery Item 5' },
    { img: 'assets/gallery/g6.jpg', title: 'Gallery Item 6' }
  ];

  const galleryContainer = document.getElementById('galleryItems');
  galleryItems.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
      </div>
    `;
    galleryContainer.appendChild(col);
  });

  // Customer Reviews
  const reviews = [
    {
      text: '"The Mandi rice was absolutely delicious! The flavors were authentic and the portion was generous. Will definitely come back!"',
      author: 'Rahul Sharma'
    },
    {
      text: '"Best chicken dishes in Croydon! Juicy, well-seasoned, and cooked to perfection every time. Highly recommended!"',
      author: 'Priya Patel'
    },
    {
      text: '"The street snacks remind me of home. Authentic flavors and great service. Chai Kadai has become our regular spot!"',
      author: 'Amit and Neha'
    }
  ];

  const reviewContainer = document.querySelector('#reviewCarousel .carousel-inner');
  reviews.forEach((review, index) => {
    const item = document.createElement('div');
    item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    item.innerHTML = `
      <div class="text-center">
        <p class="review-text">${review.text}</p>
        <h5 class="review-author">${review.author}</h5>
      </div>
    `;
    reviewContainer.appendChild(item);
  });

  // Animate elements on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll('.card, .section-header');

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial animation state
  document.querySelectorAll('.card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
  });

  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
});