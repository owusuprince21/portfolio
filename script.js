let workList = document.getElementsByClassName("work-list");
let but = document.getElementsByClassName("btn");

 but.addEventListener('click',()=>{
    if(workList.style.display ==='none'){
        workList.style.display='block';
    }else{
        workList.style.display='none';
    }
 });