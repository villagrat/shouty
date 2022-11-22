// Custom parameters in CucumberJS
const Person = require('../../src/shouty')
const { defineParameterType } = require('@cucumber/cucumber')

defineParameterType({
	name: 'person',
	// necessary to tell Cucumber Expressions what text to match
	regexp: /Lucy|Sean/,
	// an instance of Person will be passed into our step definition automatically
	transformer: name => new Person(name)
})

module.exports
