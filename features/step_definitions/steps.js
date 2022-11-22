const { Given, When, Then, Before } = require('@cucumber/cucumber')
const { assertThat, is } = require('hamjest')

const { Person, Network } = require('../../src/shouty')

Before(function() {
	this.network = new Network()
	this.people = {}
	console.log('Before called and now we have: ')
	console.log('network: ', this.network)
	console.log('people: ', this.people)
})

// create person in a generic stepdef
Given('a person named {word}', function (name) {
	this.people[name] = new Person(this.network)
	console.log('given a person named lucy we now have: ', this.people)
});

When('Sean shouts {string}', function (message) {
  this.people['Sean'].shout(message)
  this.messageFromSean = message
})

Then('Lucy should hear Sean\'s message', function () {
  assertThat(this.people['Lucy'].messagesHeard(), is([this.messageFromSean]))
})
