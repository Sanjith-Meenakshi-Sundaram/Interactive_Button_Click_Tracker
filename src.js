function click(){
    let count=0;
    return function(){
        count++;
        return count;
    };
}
const counter=click();
document.getElementById("button").addEventListener("click",() =>{
    const count=counter();
    document.getElementById("times").innerText=`you clicked the button ${count} times`;
});