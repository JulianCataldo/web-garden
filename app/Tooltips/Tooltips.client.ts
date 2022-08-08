import tippy, { Props as TippyProps, Placement } from 'tippy.js';

const elements = document.querySelectorAll('[title]');

// console.log({ elements });
for (let i = 0, len = elements.length; i < len; i++) {
  const element = elements[i];
  const content = element.getAttribute('title');
  const options = {
    content,
    // theme: 'myTheme',
    maxWidth: 'none',
    delay: [0, 150],
    placement: 'auto',
  } as TippyProps;
  if (element.getAttribute('data-tooltip-placement')) {
    options.placement = element.getAttribute(
      'data-tooltip-placement',
    ) as Placement;
  }
  tippy(element, options);
  element.setAttribute('title', '');
}
