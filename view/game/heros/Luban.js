//引入基类
import Hero from './Hero.js'

//引入技能类
import S11210 from '../skills/S11210.js';
import S11220 from '../skills/S11220.js';
import S11230 from '../skills/S11230.js';

//引入皮肤类
import L1 from '../skins/L1.js';
import L2 from '../skins/L2.js';

export default class Luban extends Hero{
    constructor(){
        super("鲁班",'sources/heros/luban1.png', [new S11210,new S11220,new S11230]);
        this.skins = [new L1,new L2]
        // this.name="鲁班";
        // this.ico = 'sources/heros/luban1.png';
        // this.skills = [new S11210,new S11220,new S11230];
        // this.skins = 'sources/skins/301120-4126.png';
    }
}

//基础类