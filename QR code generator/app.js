const qrImage = document.querySelector("#qrImg");
const imageBox = document.querySelector("#imgBox");
const qrText = document.querySelector("#qrText");

function generateQr(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imageBox.classList.add("show-img");
    }
    else{
        qrText.classList.add(".error");
        setTimeout(()=>{
            qrText.classList.remove(".error")
        },1000);
    }
    
    }
