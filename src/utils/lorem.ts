import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 1,
    max: 3,
  },
  wordsPerSentence: {
    min: 3,
    max: 8,
  },
});

export const generateChatterText = () => lorem.generateParagraphs(1);
