//游侠管理类
import Player from './Player.js';
export default class Game{
    constructor(){
        this.Player = null;
    }
    login(name){
        this.player = new Player(name)
    }
}