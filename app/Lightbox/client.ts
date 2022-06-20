const lbTriggers = document.querySelectorAll('[data-lightbox="true"]');
const lightbox = document.querySelector('.app-lightbox');
const portal = lightbox.querySelector('.portal');

// eslint-disable-next-line no-restricted-syntax
for (const trig of lbTriggers) {
  trig.addEventListener('click', () => {
    portal.innerHTML = trig.innerHTML;

    setTimeout(() => {
      // Adapt size attribute dynamically
      const img = portal.querySelectorAll('img')[0];
      const ratio = img.naturalWidth / img.naturalHeight;
      // console.log({
      //   s: {
      //     ratio,
      //     j: window.innerHeight,
      //     w: img.naturalWidth,
      //     h: img.naturalHeight,
      //   },
      // });
      img.sizes = `${window.innerHeight * ratio}px`;
    }, 352);
    // console.log('cli');
    lightbox.classList.add('is-active');
    document.documentElement.classList.add('scrollIsLocked');
  });
}

lightbox.addEventListener('click', () => {
  // console.log('cli');
  lightbox.classList.remove('is-active');
  document.documentElement.classList.remove('scrollIsLocked');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // console.log(e);
    lightbox.classList.remove('is-active');
    document.documentElement.classList.remove('scrollIsLocked');
  }
});

// TODO: taken window resize into account
// window.addEventListener('resize', (e) => {

// });

// console.log({ lbTriggers });
