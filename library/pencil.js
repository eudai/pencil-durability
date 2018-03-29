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
			this.durability --
		}
	}

}

module.exports = Pencil