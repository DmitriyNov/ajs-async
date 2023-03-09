import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => json(response))
      .then((data) => new Promise((resolve, reject) => {
        const result = JSON.parse(data);
        resolve(result);
      }));
  }
}
