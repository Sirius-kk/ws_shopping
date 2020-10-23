/* 
        login_1、login_2获取焦点 
*/
// #login_1中的第一个input
var log1_inp=document.querySelector("#login_1 input");
log1_inp.focus();
// #login_2中的第一个input
var log2_inp=document.querySelector("#login_2>div>div input:first-child");
log2_inp.focus();

/*  
        login_1的验证手机号
        // 1. 焦点移除事件
        // 2. 10.23 想改成长度判断
*/
// 一、焦点移除事件 
// 1. 查找绑定事件元素
// 就是上边的 log1_inp
// 2. 绑定事件处理函数
log1_inp.onblur=function(){
  // log1_inp.onchange=function(){
  // 3.找到要修改的元素
  // 当前输入框后边的额两个span
  // 4. 修改元素
  var reg=/0?(13|14|15|17|18|19)[0-9]{9}/;
  if(reg.test(log1_inp.value)){
  // 当格式正确后则在后边第一个span加类名(显示“格式正确” correct 的图标)
    // 同时把后边的第二个span的类名去掉
    this.nextElementSibling.className="pho_cor";
    // 输入正确则边框变绿
    $(this).css("border","1px solid #32da40");
    this.nextElementSibling.nextElementSibling.className="";
    // 取消 验证按钮 的不可选中状态
    $("#login_1 .btn_1").prop("disabled",false).addClass("btn_11");
  }else{
  // 当格式错误后则在后边第二个span加类名(显示“格式有误”和 error 的图标)
  // 同时把后边的第一个span的类名去掉
  this.nextElementSibling.className="";
  this.nextElementSibling.nextElementSibling.className="pho_err";
  // 输入错误则边框变红
  $(this).css("border","1px solid #f00");
  // 输入有误， 验证按钮 改为的不可选中状态
  $("#login_1 .btn_1").prop("disabled",true).removeClass("btn_11");
  }
};

// 二、长度判断
// var 


/*  
        注册成功之后，自动读秒跳转，或手动进入 完善个人信息
*/
// 1. 查找
//查找#login_2下的提交信息button
// 2. 绑定
  // 3. 查找
  // login_3下的第一个a元素
  var a=document.querySelector("div#login_3 a:last-child");
  // 的第一个字
  var num=a.innerHTML.slice(0,1);
  // console.log(num);
  // 4. 修改
  // 通过定时器实现读秒效果
  setInterval(function(){
    if(num==0){
      window.open("https://www.baidu.com","_self");
    }else{
      num--;
      a.innerHTML=`${num}秒后自动登录，并进入主页`;
    }
  },1000);
/*  
  获得计算后的样式
    getComputedStyle(元素对象).具体属性
                      如果是有减号的则有驼峰原则
*/
