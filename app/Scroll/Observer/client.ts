import throttle from 'lodash-es/throttle';

// let accumulation = 0;
let prevPos = 0;
let isScrollingUp = false;

document.body.setAttribute('data-is-scrolling-up', 'false');
document.body.setAttribute('data-is-bottom', 'false');
document.body.setAttribute('data-is-top', 'true');

function scrollHandler() {
  const pos = window.scrollY;
  const delta = pos - prevPos;

  const scrollDirection = Math.sign(delta) === -1;
  const isBottom = pos + window.innerHeight > document.body.offsetHeight - 100;
  const isTop = pos < 50;

  if (delta < -15 || delta > 15) {
    isScrollingUp = scrollDirection;
  }
  // console.log({ accumulation, delta });

  document.body.setAttribute('data-is-scrolling-up', '' + isScrollingUp);
  document.body.setAttribute('data-is-bottom', '' + isBottom);
  document.body.setAttribute('data-is-top', '' + isTop);

  prevPos = pos;
  // console.log({ pos });
}

document.addEventListener(
  'scroll',
  throttle(() => scrollHandler(), 100),
  { passive: true },
);

window.addEventListener('load', () => {
  // console.log({ event });
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.getBoundingClientRect().height;
  // console.log({ documentHeight, windowHeight });

  if (documentHeight / windowHeight > 2) {
    document.body.setAttribute('data-has-scroll', 'true');
  } else {
    document.body.setAttribute('data-has-scroll', 'false');
  }
});
