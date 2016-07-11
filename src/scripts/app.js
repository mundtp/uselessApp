import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ArnoldView from './ArnoldView.js'
import TrumpView from './TrumpView.js'
import DrumSetView from './DrumSetView.js'


const app = function() {

	var AppRouter = Backbone.Router.extend({
		routes: {
			"schwarzenegger": "doArnoldView",
			"trump": "doTrumpView",
			"drumset": "doDrumSetView",
			"*catchall": "doDrumSetView"
		},
		doArnoldView: function(){
			ReactDOM.render(<ArnoldView />,document.querySelector('.container'))
		},
		doTrumpView: function(){
			ReactDOM.render(<TrumpView />,document.querySelector('.container'))
		},
		doDrumSetView: function(){
			ReactDOM.render(<DrumSetView />,document.querySelector('.container'))
		},

		initialize: function() {
				Backbone.history.start()
		}
	})

	new AppRouter()
}

app()