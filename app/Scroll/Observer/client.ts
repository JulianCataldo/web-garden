import throttle from 'lodash-es/throttle';

// let accumulation = 0;
let prevPos = 0;
let isScrollingUp = false;

function flip(attr: string, state: boolean) {
  document.body.setAttribute(`data-${attr}`, `${state}`);
}

flip('is-scrolling-up', false);
flip('is-bottom', false);
flip('is-top', true);

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

  flip('is-scrolling-up', isScrollingUp);
  flip('is-bottom', isBottom);
  flip('is-top', isTop);

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
    flip('has-scroll', true);
  } else {
    flip('has-scroll', false);
  }
});
