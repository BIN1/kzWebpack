import '../css/index.less';
import base from '../js/base.js';
let component=() =>{
    for(let i=0;i<30;i++){
        let li=document.createElement('li');
        li.innerHTML=i;
        li.onclick=() => {
            console.log(i);
            window.location.href = base.ROOT + base.pathHome + "/goods/detail.html?"+i;
        }
        document.getElementById("main-contain").appendChild(li);
    };
};
component();