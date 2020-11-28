import Alert from "@/components/alert";
 
import Vue from "vue";
 
//原始组件
var components = {
    Alert:Alert
}
 
var instance = {}; //缓存组件的实例
var Ruler = {};  //组件的集合
var body  =  document.body || document.documentElement;
var root = document.createElement("div");
body.appendChild(root);
 
//初始化构造vue组件，并且注入自己的代码
const initComponents = function(type,options){
    options  =  options || {};
    type = type || '';
    if(components[type]){  
        if(!instance[type]){
            //避免重复的初始化
            var div = document.createElement('div');
            root.appendChild(div);
            const MessageBoxConstructor = Vue.extend(components[type]);
               
            instance[type]  = new MessageBoxConstructor({
                el: div
            });
        }
        var ins = instance[type];
        //复制属性
        for(var i in options){
            ins[i] = options[i];
        }
        Vue.nextTick(()=>{
            ins.visible = true;
        })
        return new Promise(function(resolve,reject){
            //注入当前的 promise
            ins._promise = {
                resolve,
                reject
            };
        }).finally(()=>{
            //ins.visible = false;
            //可以在这里监听，不管结果如何，最后执行一段代码
        });
    }else{
        return Promise.reject("组件不存在");   
    };
}
//开始注册组件
 
var Ruler = {};  //组件的集合
 
//主动关闭某个组件弹窗  type 组件类型名称， methods  false  取消关闭， true 确认关闭
Ruler.closeComponents = function (type,methods) {
    if(instance[type] && instance[type]._promise){
        if(methods){
          instance[type]._promise.resolve();
        }else{
          instance[type]._promise.reject();
        }
      instance[type].visible = false;
    }
}
 
 
//对弹出组件的初始化处理
function popupHandle(i,options){
  if(typeof options == "string"){
    options  = {
      msg: options
    }
  }
  return  initComponents(i,options);
}
 
 
for(var i in components){
  Ruler[i] = popupHandle.bind(components[i],i);
}
export default{
    install(Vue){
       Vue.prototype.$Ruler = Ruler;
    }
}