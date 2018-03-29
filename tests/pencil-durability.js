var Pencil = require('../library/pencil.js')
var Paper = require('../library/paper.js')

var PencilDurabilityTests = function(){

	this['When the pencil writes, the paper reflects the text.'] = function(){
		var pencil = new Pencil
		var paper = new Paper
		pencil.write(paper,'Some example text.')
		var expected = 'Some example text.'
		var actual = paper.text
		debugger
		return actual == expected
	}

	this['When I add more text to the paper, the paper reflects the entire string.'] = function(){
		var pencil = new Pencil
		var paper = new Paper
		pencil.write(paper,'Writing is a good way')
		pencil.write(paper,' to remember things.')
		var expected = 'Writing is a good way to remember things.'
		var actual = paper.text
		return actual == expected
	}

	this['Writing text reduces the durability of the pencil.'] = function(){
		var startingDurability = 5
		var pencil = new Pencil({
			durability: startingDurability
		})
		var paper = new Paper
		var text = '123'
		pencil.write(paper,text)
		var expected = startingDurability - text.length
		var actual = pencil.durability
		return actual == expected
	}

	this['Writing spaces does not expend durability.'] = function(){
		var startingDurability = 5
		var pencil = new Pencil({
			durability: startingDurability
		})
		var paper = new Paper
		var text = ' '
		pencil.write(paper,text)
		var expected = startingDurability
		var actual = pencil.durability
		return actual == expected
	}

	this['Writing new lines does not expend durability.'] = function(){
		var startingDurability = 5
		var pencil = new Pencil({
			durability: startingDurability
		})
		var paper = new Paper
		var text = '\n'
		pencil.write(paper,text)
		var expected = startingDurability
		var actual = pencil.durability
		return actual == expected
	}

	this['A dull pencil will only write spaces.'] = function(){
		var startingDurability = 0
		var pencil = new Pencil({
			durability: startingDurability
		})
		var paper = new Paper
		var text = 'Hello.'
		pencil.write(paper,text)
		var expected = '      '
		var actual = paper.text
		return actual == expected
	}

}

module.exports = PencilDurabilityTests