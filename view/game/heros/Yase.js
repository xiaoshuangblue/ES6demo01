//引入基类
import Hero from './Hero.js'
//引入技能类
import S16610 from '../skills/S16610.js';
import S16620 from '../skills/S16620.js';
import S16630 from '../skills/S16630.js';
//引入皮肤类
import Y1 from '../skins/Y1.js';
import Y2 from '../skins/Y2.js';
import Y3 from '../skins/Y3.js';

//import S301660_08792 from '../skins/S301660_08792.js';
export default class Yase extends Hero{
    constructor(){
        super("亚瑟",'sources/heros/yase1.png',[new S16610,new S16620,new S16630]);
        this.skins = [new Y1, new Y2, new Y3]
        // this.name="亚瑟";
        // this.ico = 'sources/heros/yase1.png';
        // this.skills = [new S16610,new S16620,new S16630];
        // this.skins = 'sources/skins/301660-08792.png';
    }
}