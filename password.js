const upperset="ABCDEFGHIJKLMNOPQRSTUVXYZ"
const lowerset = "abcdefghijklmnopqrstuvwxyz"
const numberset = "1234567890"
const symbols = "!@#$%^&*()_+|"


const upperinput = document.getElementById("upper-case")
const lowerinput = document.getElementById("lower-case")
const numberinput = document.getElementById("number-input")
const symbolinput = document.getElementById("symbols")
const passbox = document.getElementById("pass-box")
const totalchar = document.getElementById("total-char")

const getrandomdata = (dataset) => {
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatepassword = (password="") => {
       if(upperinput.checked) {
        password += getrandomdata(upperset);
       }
       if(lowerinput.checked) {
        password += getrandomdata(lowerset);
       }
       if(numberinput.checked) {
        password += getrandomdata(numberset);
       }
       if(symbolinput.checked) {
        password += getrandomdata(symbols);
       }
       if(password.length <= totalchar.value) {
        return generatepassword(password)
       }
       //trim(password,totalchar.value);
       passbox.innerText=trim(password,totalchar.value);
}
document.getElementById("btn").addEventListener("click",function() {
    generatepassword();
})
trim=(str,num)=> {
   if(str.length>num) {
    let substr = str.substring(0,num);
    return substr;
   } else {
    return str;
   }
}
