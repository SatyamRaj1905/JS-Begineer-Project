// Generate a random color

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalID  // isse bar bar ek naya intervalID ban rha h and then overwrite hue jaa rha h which is not a good practice

const startChangingColor = () => {

    if(!intervalID){  // directly tm isko NULL mark kr doge to problem h as ek baar chlne ke baad intervalID me NULL aa jayega phir wo wapas se nhi chlega so SAFETY CHECH is important while using like this
        intervalID = setInterval(changeColor,1000);
    }

    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
   
}
const stopChangingColor = () => {

    clearInterval(intervalID);
    intervalID = null;  // isse ek baar jb use ho gya to agli baar jb bnega intervalID ye wala flush out ho jayega
}
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
    


