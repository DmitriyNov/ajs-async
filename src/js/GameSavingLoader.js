import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => json(response))
      .then((data) => {
        const obj = JSON.parse(data);
        const { id, created, userInfo } = obj;
        return new GameSaving(id, created, userInfo);
      });
  }
}
