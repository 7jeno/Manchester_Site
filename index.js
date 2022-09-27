let hamburger=document.querySelector(".hamburger");
let navBar=document.querySelector(".nav-bar");
let backdrop=document.querySelector(".backdrop");
hamburger.onclick=function(){
    console.log("clicked")
    navBar.classList.toggle("active")
    if(navBar.classList[1]=="active"){
      backdrop.style.display="none";
    }
    else{
        backdrop.style.display="block";
    }
}







