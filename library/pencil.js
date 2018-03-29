var Pencil = function(options){

	options = options || {}
	this.durability = options.durability || 0

	this.write = function(paper,text){
		for (var i in text){
			var character = text[i]
			paper.text += character
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