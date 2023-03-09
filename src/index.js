import GameSavingLoader from './js/GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  // Нам же не нужно в этом задании нигде создавать ошибки
  console.log(error);
});
