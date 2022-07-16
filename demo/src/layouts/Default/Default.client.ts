import ClipboardJS from 'clipboard';

// player.play();

// eslint-disable-next-line no-new
// new ClipboardJS('[data-clipboard-copy]', {
//   target(trigger: HTMLElement) {
//     console.log('Copied!', trigger);
//     // const btn = trigger.querySelector('.ButtonSimple');
//     // const prevText = btn.innerText;

//     // btn.innerText = '✅  OK';
//     // setTimeout(() => {
//     //   btn.innerText = prevText;
//     // }, 1500);

//     // return trigger.previousElementSibling;
//     // return trigger.innerText;
//     trigger.setAttribute('data-clipboard-was-copied', 'true');
//     setTimeout(() => {
//       trigger.setAttribute('data-clipboard-was-copied', 'false');
//     }, 2000);
//     return trigger;
//   },
// });

// TODO: Relocate
const clipboard = new ClipboardJS('[data-clipboard-target]');

clipboard.on('success', (e) => {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);

  e.clearSelection();
});

clipboard.on('error', (e) => {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});

// Feature flags

const urlSearchParams = new URLSearchParams(window.location.search);

urlSearchParams.forEach((e, key) => {
  if (key.startsWith('ff-')) {
    const unprefixed = key.replace('ff-', '');
    const selector = `[data-feature-flag='${unprefixed}'`;
    const domElem = document.querySelector(selector);

    domElem.removeAttribute('hidden');
  }
  console.log({ [key]: e });
});
