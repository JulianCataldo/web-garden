const overlay = document.getElementById('app-transition-overlay');

// BUG:
// define:vars={{ speed: props.speed }}
// IS NOT WORKING

// WORKAROUND:
const style = window.getComputedStyle(overlay);
const speed =
  parseInt(style.getPropertyValue('--speed').replace('ms'), 10) || 500;
// const color = style.getPropertyValue('--color') || 'white';
// WORKAROUND

const links = document.getElementsByTagName('a');

// TODO: refactor using iterations instead of for loop
for (let i = 0, len = links.length; i < len; i++) {
  const href = links[i].getAttribute('href');

  if (href?.length) {
    const link = links[i];

    const isNotHash = href[0] !== '#';
    const isNotTargetBlank = link.getAttribute('target') !== '_blank';
    const isNotExternal = href?.startsWith('http') === false;
    const isNotMailTo = href?.startsWith('mailto:') === false;
    const isNotTel = href?.startsWith('tel:') === false;

    const conditions = [
      isNotHash,
      isNotTargetBlank,
      isNotExternal,
      isNotMailTo,
      isNotTel,
    ];
    if (conditions.every((c) => c === true)) {
      // eslint-disable-next-line no-loop-func
      link.addEventListener('click', (e) => {
        e.preventDefault();

        link.classList.add('has-been-clicked');

        setTimeout(() => link.classList.remove('has-been-clicked'), speed * 2);
        overlay.classList.toggle('is-visible');

        document.body.setAttribute('data-is-top', 'true');

        setTimeout(() => {
          window.location = href;
        }, speed);
      });
    }
  }
}
