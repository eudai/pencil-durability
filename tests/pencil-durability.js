var Pencil = require('../library/pencil.js')
var Paper = require('../library/paper.js')

var PencilDurabilityTests = function(){

	this['When the pencil writes, the paper reflects the text.'] = function(){
		var pencil = new Pencil
		var paper = new Paper
		pencil.write(paper,'Some example text.')
		var expected = 'Some example text.'
		var actual = paper.text
		return actual == expected
	}

}

module.exports = PencilDurabilityTests