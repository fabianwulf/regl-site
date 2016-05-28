var choo = require('choo')
var css = require('dom-css')

module.exports = function (params, state, send) {
  return choo.view`
  <main>
    <div class='row' id='title'>
      <div class='myclass'>
        <h1 align='right'>regl</h1>
      </div>
      <div class='color-block-big blue'>
      </div>
    </div>
    <div class='row'>
      <div class='hashtag'>
        <h2># declarative and stateless webgl</h2>
      </div>
    </div>
    <div class ='row'>
      <div class ="about"> 
      <h3>regl is a new set of functional abstracitons for webgl.</h3>
      <br>
      <h3>using regl is easier than writing raw webgl code because you don't need to manage state or binding. it's also lighter and faster and has less overhead than many existing 3d frameworks. and it has a functional data-driven style inspired by react.</h3>
      <br>
      <h3>check out the sections below to learn more!</h3>
      </div>
    </div>
    <br>
    <div class='row'>
      <a class='link' href='/examples'>examples</a>
      <span class ='color-block-small orange'></span>
      <a class='link' href='/comparisons'>comparisons</a>
      <span class ='color-block-small pink'></span>
      <a class='link' href='/api'>api</a>
      <span class ='color-block-small green'></span>
      <a class='link' href='https://github.com/mikolalysenko/regl'>github</a>
      <span class ='color-block-small green'></span>
    </div>
  </main>`
}