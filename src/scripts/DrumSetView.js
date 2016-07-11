import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

var KEY_CODES = {
	a: 65,
	b: 66,
	c: 67,
	d: 68,
	e: 69,
	f: 70,
	g: 71,
	h: 72,
	i: 73,
	j: 74,
	k: 75,
	l: 76,
	m: 77,
	n: 78,
	o: 79,
	p: 80,
	q: 81,
	r: 82,
	s: 83,
	t: 84,
	u: 85,
	v: 86,
	w: 87,
	x: 88,
	y: 89,
	z: 90,
}


var _dos1 = function(){
	var aNode = qs('#sound1')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s1 = new Audio('Maracsy.wav')
 	s1.preload = 'auto'
 	play(s1)
 }
var _dos2 = function(){
	var aNode = qs('#sound2')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s2 = new Audio('Pauzimsy.wav')
 	s2.preload = 'auto'
 	play(s2)
 }
var _dos3 = function(){
	var aNode = qs('#sound3')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s3 = new Audio('Revsymbsy.wav')
 	s3.preload = 'auto'
 	play(s3)
 }
var _dos4 = function(){
	var aNode = qs('#sound4')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s4 = new Audio('Ridesy.wav')
 	s4.preload = 'auto'
 	play(s4)
 }
var _dos5 = function(){
	var aNode = qs('#sound5')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s5 = new Audio('Scrsh1sy.wav')
 	s5.preload = 'auto'
 	play(s5)
 }
var _dos6 = function(){
	var aNode = qs('#sound6')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s6 = new Audio('Sidesy.wav')
 	s6.preload = 'auto'
 	play(s6)
 }
var _dos7 = function(){
	var aNode = qs('#sound7')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s7 = new Audio('Snr1sy.wav')
 	s7.preload = 'auto'
 	play(s7)
 }
var _dos8 = function(){
	var aNode = qs('#sound8')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s8 = new Audio('Splshsy.wav')
 	s8.preload = 'auto'
 	play(s8)
 }
var _dos9 = function(){
	var aNode = qs('#sound9')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s9 = new Audio('Squishsy.wav')
 	s9.preload = 'auto'
 	play(s9)
 }
var _dos10 = function(){
	var aNode = qs('#sound10')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s10 = new Audio('Surdosy.wav')
 	s10.preload = 'auto'
 	play(s10)
 }
var _dos11 = function(){
	var aNode = qs('#sound11')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s11 = new Audio('Tecsy.wav')
 	s11.preload = 'auto'
 	play(s11)
 }
var _dos12 = function(){
	var aNode = qs('#sound12')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s12 = new Audio('Timblsy.wav')
 	s12.preload = 'auto'
 	play(s12)
 }
var _dos13 = function(){
	var aNode = qs('#sound13')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s13 = new Audio('Timp1sy.wav')
 	s13.preload = 'auto'
 	play(s13)
 }
var _dos14 = function(){
	var aNode = qs('#sound14')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s14 = new Audio('Tmborimsy.wav')
 	s14.preload = 'auto'
 	play(s14)
 }
var _dos15 = function(){
	var aNode = qs('#sound15')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s15 = new Audio('Tmbrsy.wav')
 	s15.preload = 'auto'
 	play(s15)
 }
var _dos16 = function(){
	var aNode = qs('#sound16')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s16 = new Audio('Tom1elsy.wav')
 	s16.preload = 'auto'
 	play(s16)
 }
var _dos17 = function(){
	var aNode = qs('#sound17')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s17 = new Audio('Tom2elsy.wav')
 	s17.preload = 'auto'
 	play(s17)
 }
var _dos18 = function(){
	var aNode = qs('#sound18')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s18 = new Audio('Tom3elsy.wav')
 	s18.preload = 'auto'
 	play(s18)
 }
var _dos19 = function(){
	var aNode = qs('#sound19')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s19 = new Audio('Tom4elsy.wav')
 	s19.preload = 'auto'
 	play(s19)
 }
var _dos20 = function(){
	var aNode = qs('#sound20')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s20 = new Audio('Triclosesy.wav')
 	s20.preload = 'auto'
 	play(s20)
 }
var _dos21 = function(){
	var aNode = qs('#sound21')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s21 = new Audio('Triopsy.wav')
 	s21.preload = 'auto'
 	play(s21)
 }
var _dos22 = function(){
	var aNode = qs('#sound22')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s22 = new Audio('Uuhsy.wav')
 	s22.preload = 'auto'
 	play(s22)
 }
var _dos23 = function(){
	var aNode = qs('#sound23')
	aNode.style.background = 'white'
	setTimeout(()=>{aNode.style.background = 'none'},300)
	var s23 = new Audio('Kik1sy.wav')
 	s23.preload = 'auto'
 	play(s23)
 }

 var play = function(audio){
 	audio.play()
 }

var qs = function(input) {
	return document.querySelector(input)
}

qs('body').style.background='#b3d9ff'




const DrumSetView = React.createClass({
	_doFunc: function(e){
		console.log('test')

	},
	
	render: function(){



		
				return (
					<div id="headingContainer" >
						<h1>Drum Set</h1>
						<p><a id='none' href='#schwarzenegger'>- Click for Arnold Schwarzenegger -</a><a id='none' href='#trump'>- Click for Donald Trump -</a> </p>
						<p>- Click the sounds below or type the key - </p>
							<ul>
								<a><u>Sound</u></a> 
								<a id='sound1' onClick={_dos1}>Maraca</a>
								<a id='sound2' onClick={_dos2}>Wood Block</a>
								<a id='sound3' onClick={_dos3}>Cymbal Build</a>
								<a id='sound4' onClick={_dos4}>Cymbal</a>
								<a id='sound5' onClick={_dos5}>Thud</a>
								<a id='sound6' onClick={_dos6}>Stick Click</a>
								<a id='sound7' onClick={_dos7}>Snare</a>
								<a id='sound8' onClick={_dos8}>Splash Cymbal</a>
								<a id='sound9' onClick={_dos9}>Hit/Scrape</a>
								<a id='sound10' onClick={_dos10}>Thump</a>
								<a id='sound11' onClick={_dos11}>Small Gong</a>
								<a id='sound12' onClick={_dos12}>Can</a>
								<a id='sound13' onClick={_dos13}>Timpani</a>
								<a id='sound14' onClick={_dos14}>Hit</a>
								<a id='sound15' onClick={_dos15}>Tambourine</a>
								<a id='sound16' onClick={_dos16}>Tom1</a>
								<a id='sound17' onClick={_dos17}>Tom2</a>
								<a id='sound18' onClick={_dos18}>Tom3</a>
								<a id='sound19' onClick={_dos19}>Tom4</a>
								<a id='sound20' onClick={_dos20}>Triangle</a>
								<a id='sound21' onClick={_dos21}>Triangle2</a>
								<a id='sound22' onClick={_dos22}>Synth</a>
								<a id='sound23' onClick={_dos23}>Kick</a>
							</ul>	
							<ul>	
								<p><u>Key</u></p>
								<p>q</p>
								<p>w</p>
								<p>e</p>
								<p>r</p>
								<p>t</p>
								<p>y</p>
								<p>u</p>
								<p>i</p>
								<p>o</p>
								<p>p</p>
								<p>a</p>
								<p>s</p>
								<p>d</p>
								<p>f</p>
								<p>g</p>
								<p>h</p>
								<p>j</p>
								<p>k</p>
								<p>l</p>
								<p>z</p>
								<p>x</p>
								<p>c</p>
								<p>v</p>
							</ul>									
					</div>
				)			
			},
})

qs('body').addEventListener('keydown',function(e) {
	if (e.keyCode === KEY_CODES.q) {
		_dos1()
	}
	if (e.keyCode === KEY_CODES.w) {
		_dos2()
	}
	if (e.keyCode === KEY_CODES.e) {
		_dos3()
	}
	if (e.keyCode === KEY_CODES.r) {
		_dos4()
	}
	if (e.keyCode === KEY_CODES.t) {
		_dos5()
	}
	if (e.keyCode === KEY_CODES.y) {
		_dos6()
	}
	if (e.keyCode === KEY_CODES.u) {
		_dos7()
	}
	if (e.keyCode === KEY_CODES.i) {
		_dos8()
	}
	if (e.keyCode === KEY_CODES.o) {
		_dos9()
	}
	if (e.keyCode === KEY_CODES.p) {
		_dos10()
	}
	if (e.keyCode === KEY_CODES.a) {
		_dos11()
	}
	if (e.keyCode === KEY_CODES.s) {
		_dos12()
	}
	if (e.keyCode === KEY_CODES.d) {
		_dos13()
	}
	if (e.keyCode === KEY_CODES.f) {
		_dos14()
	}
	if (e.keyCode === KEY_CODES.g) {
		_dos15()
	}
	if (e.keyCode === KEY_CODES.h) {
		_dos16()
	}
	if (e.keyCode === KEY_CODES.j) {
		_dos17()
	}
	if (e.keyCode === KEY_CODES.k) {
		_dos18()
	}
	if (e.keyCode === KEY_CODES.l) {
		_dos19()
	}
	if (e.keyCode === KEY_CODES.z) {
		_dos20()
	}
	if (e.keyCode === KEY_CODES.x) {
		_dos21()
	}
	if (e.keyCode === KEY_CODES.c) {
		_dos22()
	}
	if (e.keyCode === KEY_CODES.v) {
		_dos23()
	}
})

export default DrumSetView