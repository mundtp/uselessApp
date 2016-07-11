import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

var great = new Audio('Great.mp3')
var jobs = new Audio('Jobs.mp3')
var leader = new Audio('Leader.mp3')
var loan = new Audio('Loan.mp3')
var nice = new Audio('Nice.mp3')
var rich = new Audio('Rich.mp3')
var rich2 = new Audio('Rich2.mp3')
var theyLoveMe = new Audio('theyLoveMe.mp3')
var wall = new Audio('Wall.mp3')

var playFunction = function(audio){
	if (audio.paused) {
		audio.currentTime=0
		audio.play()
	} 
	else {
	    audio.pause();
	}
}

const TrumpView = React.createClass({
		_Rich: function(){
			playFunction(rich)
		},
		_Rich2: function(){
			playFunction(rich2)
		},
		_Great: function(){
			playFunction(great)
		},
		_Leader: function(){
			playFunction(leader)
		},
		_Jobs: function(){
			playFunction(jobs)
		},
		_Wall: function(){
			playFunction(wall)
		},
		_Nice: function(){
			playFunction(nice)
		},
		_Loan: function(){
			playFunction(loan)
		},
		_TheyLoveMe: function(){
			playFunction(theyLoveMe)
		},

		
		render: function(){
			return (
				<div id="headingContainer">
					<h1>Donald Trump</h1>
					<p><a id='none' href='#schwarzenegger'>- Click for Arnold Schwarzenegger -</a> <a id='none' href='#drumset'>- Click for Drum Set -</a> </p>
					<p>- Click the buttons to play/pause -</p>
					
					<a id='tabs' onClick={this._Loan}>Loan</a>
					<a id='tabs' onClick={this._Rich}>Rich</a>
					<a id='tabs' onClick={this._Rich2}>Rich2</a>
					<a id='tabs' onClick={this._Leader}>Leader</a>					
					<a id='tabs' onClick={this._Wall}>Wall</a>					
					<a id='tabs' onClick={this._TheyLoveMe}>They Love Me</a>
					<a id='tabs' onClick={this._Jobs}>Jobs</a>
					<a id='tabs' onClick={this._Nice}>Nice</a>
					<a id='tabs' onClick={this._Great}>Great</a>				
					<img id='trump' src='http://www.afr.com/content/dam/images/g/n/g/3/f/0/image.related.afrArticleLead.620x350.gnmfqw.png/1458469555878.jpg'/>
					
				</div>
			)
		
		},
	})

export default TrumpView