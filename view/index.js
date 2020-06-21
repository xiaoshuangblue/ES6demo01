//渲染 dom结构
//对象 玩家对象 亚瑟 鲁班 ... 技能 皮肤；
//Player YaSe Luban -->Hero(基础类别：父类) skill-->skill(父类、基类)； skin-->skin(父类)；
//游戏管理类 Game 

import Game from "./game/Game.js";
let game = new Game();

//  game.login("张三");
// console.log(game)
let gameEles = {
    login:{        
        username:document.querySelector(".username"),
        btn:document.querySelector(".sub"),
        loginView:document.querySelector(".login")
    },
    game:{
        gameView:document.querySelector(".game"),
        chioseusername:document.querySelector(".chioseusername"),
        heroView:document.querySelector(".heroView"),
        heroShow:document.querySelector(".heroShow"),
        skillsView:document.querySelector(".skillsView"),
        skinView:document.querySelector(".skinView"),
        heroBtn:document.querySelector(".heroBtn"),
        skinBtn:document.querySelector(".skinBtn"),
        heroContainer:document.querySelector(".heroContainer"),
        skinContainer:document.querySelector(".skinContainer"),
        skinView:document.querySelector(".skinView"),
    }
}

gameEles.login.btn.onclick = function(){
    let username = gameEles.login.username.value;
    if(username){
        game.login(username);
        console.log(game);
        //隐藏登录页；
        gameEles.login.loginView.style.display = "none";
        //显示英雄选择页面
        gameEles.game.gameView.style.display = "block";
        //改变用户名
        gameEles.game.chioseusername.innerHTML = "";
        gameEles.game.chioseusername.innerHTML = username;
        game.player.name;
        renderHero(game);
    }else{
        alert("请输入用户名")
    }
}

//渲染英雄方法
function renderHero(game){
   //console.log( game.player.heros);
   let heros = game.player.heros
   gameEles.game.heroView.innerHTML = "";
   heros.forEach(hero=>{
       let heroItem = document.createElement("div");
       heroItem.classList.add("heroItem");
       heroItem.innerHTML = `<img src="${hero.ico}" /><span>${hero.name}</span>`;       
       gameEles.game.heroView.appendChild(heroItem);
       heroItem.onclick = function(){
           //显示选中的英雄
            gameEles.game.heroShow.innerHTML = `<img src="${hero.ico}" />`;


           //渲染点击英雄的技能；
           renderSkill(hero);
           renderSkin(hero);


           //替换角色图
           gameEles.game.skinView.innerHTML = `<img src="${hero.skins}" />`;

       }
   })
}

//渲染技能
function renderSkill(hero){
    // console.log(hero);
    let skill = hero.skills;
    //渲染之前先清空技能，不然会叠加出现
    gameEles.game.skillsView.innerHTML = "";
    skill.forEach(skill=>{
        let img = new Image();
        img.src = skill.ico;
        gameEles.game.skillsView.appendChild(img);
    })
}

//渲染皮肤
function renderSkin(hero){
    gameEles.game.skinView.innerHTML="";
    let skins = hero.skins;
    skins.forEach(skin=>{
        let skinDiv = document.createElement("div");
        skinDiv.classList.add("skinItem");
        skinDiv.innerHTML = ` <img src="${skin.ico}" />
        <span>${skin.name}</span>`;
        gameEles.game.skinView.appendChild(skinDiv);

    })
}




//作业：扩展鲁班类
gameEles.game.heroBtn.onclick = function(){
    gameEles.game.heroContainer.style.display = "block";
    gameEles.game.skinContainer.style.display = "none";
}

gameEles.game.skinBtn.onclick = function(){
    gameEles.game.heroContainer.style.display = "none";
    gameEles.game.skinContainer.style.display = "block";
}
//;