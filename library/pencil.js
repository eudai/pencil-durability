var Pencil = function(options){

	options = options || {
		durability: 40000
	}
	this.durability = options.durability

	this.write = function(paper,text){
		for (var i in text){
			var character = text[i]
			if (this.durability >= 1){
				paper.text += character
				var isUpperCase = character.toUpperCase() === character
				if (isUpperCase){
					this.durability -= 2
				} else {
					this.durability -= 1
				}
			} else {
				paper.text += ' '
				continue
			}
			if (character === ' '){
				continue
			}
			if (character === '\n'){
				continue
			}
		}
	}

}

module.exports = Pencil