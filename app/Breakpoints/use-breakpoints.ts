import throttle from 'lodash-es/throttle';

function getCurrentBreakpoint() {
  const currentBreakpoint = window
    .getComputedStyle(
      document.querySelector('[data-breakpoint-css]'),
      ':before',
    )
    .getPropertyValue('content')
    .replace(/"/g, '');

  return currentBreakpoint;
}

export default function useBreakpoints(onUpdateCallback: (bp: string) => void) {
  const currentBp = getCurrentBreakpoint();
  if (onUpdateCallback) {
    onUpdateCallback(currentBp);
    window.addEventListener(
      `resize`,
      throttle(() => onUpdateCallback(getCurrentBreakpoint()), 100),
    );
  }
  return currentBp;
}
