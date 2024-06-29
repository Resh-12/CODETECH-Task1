 const searchbox=document.getElementById("search");
 const listitem=document.getElementById("lists");
 function addTask(){
    if(searchbox.value===''){
        alert("You must write something");
    }else{
        var item=document.createElement("li");
        item.innerHTML=searchbox.value;
        listitem.appendChild(item);
            var span=document.createElement("span");
            span.innerHTML="\u00d7";
            item.appendChild(span);
    }
    searchbox.value="";
    save();
    
 }
 listitem.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
 },false);
 function save(){
    localStorage.setItem("data",listitem.innerHTML);
 }
 function display(){
    listitem.innerHTML=localStorage.getItem("data");
 }
 display();
