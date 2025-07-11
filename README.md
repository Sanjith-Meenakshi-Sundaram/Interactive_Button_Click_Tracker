# Interactive_Button_Click_Tracker
## Date:
## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ClickCounter</title>
    <link rel="stylesheet" href="color.css">
</head>
<body>
    <div class="container">
        <h1>ClickCounter</h1>
        <button id="button">click me</button>
        <p id="times">you clicked the button 0 times</p>
    </div>
    <script src="src.js"></script>
</body>
</html>
```
## CSS Code:
```
body{
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container{
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
}
button{
  padding: 15px 25px;
  font-size: 18px;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
}
button:hover{
  background-color: #45a049;
}
#times{
  font-size: 24px;
  margin-top: 20px;
  color: #333;
}
```
## JavaScript Code:
```
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
```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a05a8ae8-2f49-4da3-a820-9287f3b72eeb" />


## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
