var Pencil = function(options){

	options = options || {
		durability: 40000
	}
	this.durability = options.durability
	this.initialDurability = options.durability

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
		this.durability = this.initialDurability
	}

}

module.exports = Pencil