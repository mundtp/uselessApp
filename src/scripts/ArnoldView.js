import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

var chopper = new Audio('Chopper.mp3')
var back = new Audio('Back.mp3')
var fired = new Audio('Fired.mp3')
var killMe = new Audio('Killme.mp3')

var playFunction = function(audio){
	if (audio.paused) {
		audio.currentTime=0
		audio.play()
	} 
	else {
	    audio.pause();
	}
}

const ArnoldView = React.createClass({
		_doChopper: function(){
			playFunction(chopper)
			var imgNode = document.querySelector('img#chopper')
			imgNode.style.display = 'block'
			setTimeout(()=>{imgNode.style.display = 'none'}, 6300)
		},
		_doFired: function(){
			playFunction(fired)
			var imgNode = document.querySelector('img#fired')
			imgNode.style.display = 'block'
			setTimeout(()=>{imgNode.style.display = 'none'}, 6300)
		},
		_doKillMe: function(){
			playFunction(killMe)
			var imgNode = document.querySelector('img#killMe')
			imgNode.style.display = 'block'
			setTimeout(()=>{imgNode.style.display = 'none'}, 7000)
		},
		_doBack: function(){
			playFunction(back)
			var imgNode = document.querySelector('img#back')
			imgNode.style.display = 'block'
			setTimeout(()=>{imgNode.style.display = 'none'}, 3000)
		},
		
		render: function(){
			return (
				<div id="headingContainer">
					<h1>Arnold Schwarzenegger</h1>
					<p><a id='none' href='#trump'>- Click for Donald Trump -</a><a id='none' href='#drumset'>- Click for Drum Set -</a></p>
					<p>- Click the buttons below to play/pause - </p>
					<a id='tabs' onClick={this._doChopper}>Get to the Chopper</a>
					<a id='tabs' onClick={this._doBack}>I'll Be Back</a>
					<a id='tabs' onClick={this._doFired}>You're Fired</a>
					<a id='tabs' onClick={this._doKillMe}>Kill Me</a>

					<img id='chopper' src='http://i.giphy.com/13iKFDgHJiG9kk.gif'/>
					<img id='killMe' src='http://imgur.com/59k7qlr.jpg'/>
					<img id='back' src='http://i.giphy.com/JDKxRN0Bvmm2c.gif'/>
					<img id='fired' src='http://i.giphy.com/5QKHMV8P26rew.gif'/>
				</div>
			)
		
		},
	})

export default ArnoldView