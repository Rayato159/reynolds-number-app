<h1>Reynolds-Number-App</h1>

<p>I have studied aeronautical engineering but I'd love to code too much. This is a little project about mixing and matching with vanilla Javascript web-app for practice.</p>

<h3>Example of the program<h3>
<img src="https://github.com/Rayato159/Reynolds-Number-App/blob/main/screenshots/non-error.png"><br>

<h3>What is Reynolds Number?</h3>
<p>In aeronautical engineering, we are well known for Reynolds Numbers. The Reynolds number is a dimensionless number. 
High values of the parameter indicate that viscous forces are small and the flow is essentially inviscid. reference <a href="https://www.grc.nasa.gov/www/BGH/reynolds.html">click!</a></p>

<h2>Tutorials</h2>
<p>This tutorial is just a basic concept.</p>
<ul>
  <li><a href="#html-create">How to build HTML for a web page</a></li>
  <li><a href="#js-create">Work with Javascript!!!</a></li>
  <li><a href="#style-create">Make it more beautiful with CSS</a></li>
</ul>

<h2 id="html-create">How to build HTML for a web page</h2>
  <p>First, You don't need to worry about how it's beautiful or not. You just need to write all elements first. (I recommend drawing a sample flowchart before writing.)
  For example, I want to do a Reynolds Numbers calculator, So I need to write an input form for 4 variables (Density, Velocity, Length and, Dynamic Viscosity) at first.
  Next, do the button to submit the form. Last, do an element for the output result.</p>
  
  <h3><strong>Time to code!!!</strong></h3>
    <p>Build a form to receive 4 variables (Density, Velocity, Length and, Dynamic Viscosity)</p>
  
```html
<form id="reynolds-form" autocomplete="off">
  <div class="form-input">
      <label>Density</label>
      <input id="density" type="text" placeholder="kg/m^3">
  </div>
  <div class="form-input">
      <label>Velocity</label>
      <input id="velocity" type="text" placeholder="m/s">
  </div>
  <div class="form-input">
      <label>Length</label>
      <input id="length" type="text" placeholder="m">
  </div>
  <div class="form-input">
      <label>Dynamic Viscosity</label>
      <input id="viscos" type="text" placeholder="kg/m-s">
  </div>
  <button type="submit">Calculate</button>
</form>
```
  <br>
  <p><strong>Explain for each tag</strong></p>
  <p>I created a form tag to grab a variable to put to the Reynolds Number function to calculate the result. The form tag covers all the input tags. (Parent of an input tag)</p>
  
```html
<form id="reynolds-form" autocomplete="off"></form>
```
  <br>
  <p>The div tag will make all child tag into one group. This will be easy to style config in later.</p>
  
```html
<div class="form-input"></div>
```
  <br>
  <p>Label tag is to label an input box.</p>
  
```html
<label>Density</label>
```
  <br>
  <p>Input tag is a box to put a value into itself. The placeholder is a text in the box to describe some message.</p>
  
```html
<input id="density" type="text" placeholder="kg/m^3">
```
  <br>
  <p>Button tag is for receiving the "submit" action to keep all input and store at a variable.</p>
  
```html
<button type="submit">Calculate</button>
```
  <br>
  <p>All above are the main HTML structure of this project. You can do something more to make it more look better.</p>
  
<h2 id="js-create">Work with Javascript!!!</h2>
  <p>After finishing a layout with HTML. Now, It's time to work with our hero. That is Javascript!!!. The Javascript can make HTML feel alive.<br>
  In this part, we need to grab all elements that we had created in HTML to take some action for them with Javascript.</p>
  
  <h3><strong>Let's get started!!!</strong></h3>
  
  <p>First, To get a submit event</p>
  
```Javascript
document.querySelector("#reynolds-form").addEventListener('submit', e => {
  //statements
  e.preventDefault()
})
  
//e.preventDefault() is to protect a web-page to refresh after event was done.
```
  <br>
  <p>Next, we need to grab all the elements into the Javascript by this method below.</p>

```Javascript
const density = parseFloat(document.querySelector("#density").value)
const velocity = parseFloat(document.querySelector("#velocity").value)
const length = parseFloat(document.querySelector("#length").value)
const viscos = parseFloat(document.querySelector("#viscos").value)
  
//document.querySelector() for grab a HTML element to the Javascript.
//.value is for grab the value from element.
//parseFloat() is for convert integer number to float number.
```
  <br>
  <p>Calculating a Reynolds number by this formula and output the result to tag which id="reynolds-result"</p>

```Javascript
let reynolds_number = document.querySelector("#reynolds-result")
      reynolds_number.value = ((density * velocity * length) / viscos).toFixed(6)
  
//.toFixed() is for digits output.
```
  <br>
  <p>In case, you want to catch an error by an input form.</p>
  
```Javascript
if (isNaN(reynolds_number.value)) {
  //statements
  return
}
```
  <br>
  <p>If you want to do some delay of the result. Use this function</p>
  
```Javascript
setTimeout(callback, time)

//the callback is a function to do some statement after a timeout.
//time in millisecond.
```
  
  <br>
  <p>Overall strcuture in summary</p>
  
```Javascript
document.querySelector("#reynolds-form").addEventListener('submit', e => {
  
    setTimeout(() => {

        const density = parseFloat(document.querySelector("#density").value)
        const velocity = parseFloat(document.querySelector("#velocity").value)
        const length = parseFloat(document.querySelector("#length").value)
        const viscos = parseFloat(document.querySelector("#viscos").value)

        let reynolds_number = document.querySelector("#reynolds-result")
        reynolds_number.value = ((density * velocity * length) / viscos).toFixed(6)

        if (isNaN(reynolds_number.value)) {
            return
        }
  
    }, 1000)
  
    e.preventDefault()
})
```
  
<h2 id="style-create">Make it more beautiful with CSS</h2>
