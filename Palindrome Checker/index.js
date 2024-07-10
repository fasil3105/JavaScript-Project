const input = document.getElementById("input");



function reverseString(str){
    return str.split("").reverse().join("");
}

function palindrome(){
    
   
    const value = input.value;
    const reverse = reverseString(value)

    if (reverse === value){
        alert("Palindrome");
    }else{
        alert("Not a palindrome")
    }
    input.value = "";

    }
