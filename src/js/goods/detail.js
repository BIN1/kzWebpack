import base from '../base.js';
import '../../css/goods/detail.less';
import zepto from '../../js/zepto.min.js';
import { error } from 'util';
let id = Number(window.document.location.href.substring(window.document.location.href.indexOf('?')+1));
let url = base.apiUrl + "Goods/detail";
console.log(base.apiUrl);
$.post(url,{
    id:id
},(success) => {
    console.log(success);
},(error) => {

})
let _tap= () =>{
    window.location.href = base.ROOT + base.pathHome + "/index.html";
};
$("#detail").on("click", _tap);
a05f8dbf6ab4bc7155363c84a32e3c904523d73c;