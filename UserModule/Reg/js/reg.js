/* 
    login_1、login_2获取焦点 
*/
// #login_1中的第一个input
var log1_inp=document.querySelector("#login_1 input");
// console.log(input);// <input >
log1_inp.focus();
// #login_2中的第一个input
var log2_inp=document.querySelector("#login_2>div>div input:first-child");
log2_inp.focus();

/*  
    login_1的验证手机号
*/
// 1. 查找绑定事件元素
// 就是上边的 log1_inp
// 2. 绑定事件处理函数
log1_inp.onblur=function(){
  // console.log(log1_inp.value);
  // 3.找到要修改的元素
  // 也是这个log1_inp
  // 4. 修改元素
  var reg=/0?(13|14|15|17|18|19)[0-9]{9}/;
  if(reg.test(log1_inp.value)){
  // 当格式正确后则显示 correct 的图标
  // 加背景
    this.style.background="url(../../public_img/user_img/correct.png) no-repeat 310px";
  }else{
  // 当格式错误后则显示 error 的图标
  // 加背景
    this.style.background="url(../../public_img/user_img/error.png) no-repeat 310px";
  }
};




// 1. 查找
//查找#login_2下的提交信息button

// 2. 绑定

  // 3. 查找
  // login_3下的第一个a元素
  var a=document.querySelector("div#login_3 a:last-child");
  // 的第一个字
  var num=a.innerHTML.slice(0,1);
  console.log(num);
  // 4. 修改
  // 通过定时器实现读秒效果
  // setInterval(function(){
  //   if(num==0){
  //     window.open("https://www.baidu.com","_self");
  //   }else{
  //     num--;
  //     a.innerHTML=`${num}秒后自动登录，并进入主页`;
  //   }
  // },1000);
// var btn=document.querySelector("#login_1 .btn_1");
// console.log(btn);
// console.log(getComputedStyle(btn).borderRadius);
/*  
  获得计算后的样式
    getComputedStyle(元素对象).具体属性
                      如果是有减号的则有驼峰原则
*/
