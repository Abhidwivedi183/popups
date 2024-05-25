let sucbtn = document.getElementById("suc")
let errbtn = document.getElementById("err")
let inv = document.getElementById("inv");
let old = document.querySelector(".toastbox")
let container = document.querySelector(".buttons")

// let succes = '<i class="fa-solid fa-check"></i> succes'

function showToast(value){

let newtoast = document.createElement('div');

newtoast.innerHTML  = `${value}`;
newtoast.classList.add("tost");
old.appendChild(newtoast);

if(value === 'sucess'){
  newtoast.style.background = 'green'
}
else if(value === 'error'){
  newtoast.style.background = 'red'
}
else{
  newtoast.style.background = 'orange'
}

}

container.addEventListener('click',(e)=>{
  if(e.target.id == 'suc'){
    showToast('sucess');
  

  }
  else if(e.target.id == 'err' ){
    showToast('error');
  }
  else{
    showToast('invalid');
  }
})






