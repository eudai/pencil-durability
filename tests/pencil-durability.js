var Pencil = require('../library/pencil.js')
var Paper = require('../library/paper.js')

var PencilDurabilityTests = function(){

	this['When the pencil writes, the paper reflects the text.'] = function(){
		var pencil = new Pencil
		var paper = new Paper
		pencil.write(paper,'Text.')
		var expected = 'Text.'
		var actual = paper.text
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

	this['Writing spaces does not reduce durability.'] = function(){
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

	this['Writing new lines does not reduce durability.'] = function(){
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

	this['Lower case letters expend 1 durability.'] = function(){
		var startingDurability = 5
		var pencil = new Pencil({
			durability: startingDurability
		})
		var paper = new Paper
		var text = 'a'
		pencil.write(paper,text)
		var expected = startingDurability - 1
		var actual = pencil.durability
		return actual == expected
	}

	this['Upper case letters expend 2 durability.'] = function(){
		var startingDurability = 5
		var pencil = new Pencil({
			durability: startingDurability
		})
		var paper = new Paper
		var text = 'A'
		pencil.write(paper,text)
		var expected = startingDurability - 2
		var actual = pencil.durability
		return actual == expected
	}

	this['When a pencil is sharpened, it regains its initial durability.'] = function(){
		var startingDurability = 5
		var pencil = new Pencil({
			durability: startingDurability
		})
		var paper = new Paper
		var text = 'A'
		pencil.write(paper,text)
		pencil.sharpen()
		var expected = startingDurability
		var actual = pencil.durability
		return actual == expected
	}

	this['Sharpening a pencil will reduce its length by 1.'] = function(){
		var startingLength = 5
		var pencil = new Pencil({
			durability: 40000,
			length: startingLength
		})
		var paper = new Paper
		var text = 'A'
		pencil.write(paper,text)
		pencil.sharpen()
		var expected = startingLength - 1
		var actual = pencil.length
		return actual == expected
	}

	this['Sharpening a pencil with a length of 0 will not restore its durability.'] = function(){
		var startingDurability = 5	
		var startingLength = 0
		var pencil = new Pencil({
			durability: startingDurability,
			length: startingLength,
			
		})
		var paper = new Paper
		var text = 'A'
		pencil.write(paper,text)
		pencil.sharpen()
		var expected = 3
		var actual = pencil.durability
		return actual == expected
	}

	this['Erasing text will replace the last occurance of that text with spaces.'] = function(){
		var pencil = new Pencil({
			durability: 40000,
			length: 5,
			eraserDurability: 10
		})
		var paper = new Paper
		var text = 'How much wood could a wood chuck chuck?'
		pencil.write(paper,text)
		pencil.erase(paper,'chuck')
		var expected = 'How much wood could a wood chuck      ?'
		var actual = paper.text
		return actual == expected
	}

	this['Erasing text will reduce the eraser durability by 1.'] = function(){
		var startingEraserDurability = 10
		var pencil = new Pencil({
			durability: 40000,
			length: 5,
			eraserDurability: startingEraserDurability
		})
		var paper = new Paper
		var text = 'How much wood could a wood chuck chuck?'
		pencil.write(paper,text)
		pencil.erase(paper,'chuck')
		var expected = startingEraserDurability - 5
		var actual = pencil.eraserDurability
		return actual == expected
	}

	this['Once the eraser is warn out, it will no longer erase.'] = function(){
		var pencil = new Pencil({
			durability: 40000,
			length: 5,
			eraserDurability: 3
		})
		var paper = new Paper
		var text = 'How much wood could a wood chuck chuck?'
		pencil.write(paper,text)
		pencil.erase(paper,'chuck')
		var expected = 'How much wood could a wood chuck ch   ?'
		var actual = paper.text
		return actual == expected
	}

}

module.exports = PencilDurabilityTests