const images = document.querySelectorAll('img[data-src]');

function lazyLoadImage(image) {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
}

const options = {
  threshold: 0.5
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      lazyLoadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

images.forEach((image) => {
  imageObserver.observe(image);
});