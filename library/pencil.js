var Pencil = function(options){

	options = options || {
		durability: 40000,
		length: 5,
		eraserDurability: 10
	}
	this.durability = options.durability
	this.initialDurability = options.durability
	this.length = options.length
	this.eraserDurability = options.eraserDurability

	this.write = function(paper,text){
		for (var i in text){
			var character = text[i]
			if (this.durability >= 1){
				paper.text += character
				var isUpperCase = character.toLowerCase() !== character
				if (character === ' ') continue
				if (character === '\n') continue
				if (isUpperCase){
					this.durability -= 2
				} else {
					this.durability -= 1
				}
			} else {
				paper.text += ' '
				continue
			}
		}
	}

	this.sharpen = function(){
		if (this.length == 0) return
		this.durability = this.initialDurability
		this.length --
	}

	this.erase = function(paper,text){
		var startingIndex = paper.text.lastIndexOf(text)
		var endingIndex = startingIndex + text.length
		var originalText = paper.text
		var leftString = originalText.substring(0,startingIndex)
		var stringToReplace = originalText.substring(startingIndex,endingIndex)
		var replacementString = ''
		console.log(stringToReplace)
		for (var i in stringToReplace){
			console.log(stringToReplace[i],i)
			replacementString += ' '
			this.eraserDurability --
		}	
		var rightString = originalText.substring(endingIndex)
		paper.text = leftString + replacementString + rightString
	}

}

module.exports = Pencil