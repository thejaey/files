const videos = document.querySelectorAll('video[data-src]');

function lazyLoadVideo(video) {
  video.setAttribute('src', video.getAttribute('data-src'));
  video.onload = () => {
    video.removeAttribute('data-src');
  };
}

const videoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      lazyLoadVideo(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

videos.forEach((video) => {
  videoObserver.observe(video);
});