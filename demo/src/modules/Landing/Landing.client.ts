import { tsParticles } from 'tsparticles';

import { loadStarsPreset } from 'tsparticles-preset-stars';

loadStarsPreset(tsParticles);

const tsParticlesElem = document.querySelector('#tsparticles');

tsParticles
  .load('tsparticles', {
    preset: 'stars',
    fullScreen: false,
    background: { color: 'hsl(220, 87%, 7%)' },
    retina_detect: false,
  })
  .then(() => {
    tsParticlesElem.setAttribute('data-is-loaded', '');
  })
  .catch(() => null);
