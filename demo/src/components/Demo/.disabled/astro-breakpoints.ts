import useBreakpoints from '@julian_cataldo/astro-breakpoints/use-breakpoints';

const bpOutput = document.getElementById('bp-output') as HTMLTextAreaElement;

const randomWords = [
  'Tokyo',
  'Austin',
  'Paris',
  'Ankara',
  'Trifouilly-les-Oies',
  'Bangkok',
  'Mexico',
  'Dresde',
  'Marseille',
];
function outputCurrentBp(currentBp: string) {
  const index = Math.floor(Math.random() * randomWords.length);
  const rWord = randomWords[index];

  bpOutput.value = `${currentBp} - ${rWord}\n${bpOutput.value}`;
  console.log({ currentBp });
}

const currentBp = useBreakpoints(outputCurrentBp);
console.log({ initialCurrentBp: currentBp });
