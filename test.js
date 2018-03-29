var PencilDurabilityTests = require('./tests/pencil-durability.js')
var pencilDurabilityTests = new PencilDurabilityTests

var results = {
	passed: 0,
	failed: 0,
	total: 0
}

for (var testName in pencilDurabilityTests){
	var result = pencilDurabilityTests[testName]()
	console.log(testName,':',result ? 'Passed' : 'Failed')
	results.total ++
	if (result == true){
		results.passed ++
	} else {
		results.failed ++
	}
}

for (var key in results){
	console.log(key,':',results[key])
}