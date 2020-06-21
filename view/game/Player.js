//玩家类；
import Yase from './heros/Yase.js';
import Luban from './heros/Luban.js'
//鲁班储备import Luban from './heros/Yase.js'
export default class Player{
    constructor(name){
        this.name = name;
        this.heros = [new Yase,new Luban];
    }
   
}