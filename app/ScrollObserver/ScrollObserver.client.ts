import throttle from 'lodash-es/throttle';
/* ========================================================================== */

let prevPos = 0;
let isScrollingUp = false;

const root = document.documentElement;

function flip(attr: string, state: boolean) {
  root.setAttribute(attr, String(state));
}

function scrollHandler() {
  const pos = window.scrollY;
  const delta = pos - prevPos;

  const scrollDirection = Math.sign(delta) === -1;
  const isBottom = pos + window.innerHeight > document.body.offsetHeight - 100;
  const isTop = pos < 50;

  if (delta < -15 || delta > 15) {
    isScrollingUp = scrollDirection;
  }

  flip('data-is-scrolling-up', isScrollingUp);
  flip('data-is-bottom', isBottom);
  flip('data-is-top', isTop);

  prevPos = pos;
}

document.addEventListener(
  'scroll',
  throttle(() => scrollHandler(), 100),
  { passive: true },
);

window.addEventListener('load', () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.getBoundingClientRect().height;

  if (documentHeight / windowHeight > 2) {
    flip('data-has-scroll', true);
  } else {
    flip('data-has-scroll', false);
  }
});
