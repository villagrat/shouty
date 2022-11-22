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

Given('a person named Lucy', function () {
	this.people['Lucy'] = new Person(this.network)
	console.log('given a person named lucy we now have: ', this.people)
});

Given('a person named Sean', function () {
  this.sean = new Person(this.network)
})

When('Sean shouts {string}', function (message) {
  this.sean.shout(message)
  this.messageFromSean = message
})

Then('Lucy should hear Sean\'s message', function () {
  assertThat(this.people['Lucy'].messagesHeard(), is([this.messageFromSean]))
})
