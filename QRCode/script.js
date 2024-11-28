let imgbox = document.getElementById("img-box");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    if(qrText.value.length > 0){
        qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        qrImg.style.display="block";
        qrImg.style.maxHeight = "300px";
    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    }
});
