class Person {
	constructor(network){
		this.messages = []
		this.network = network
	
		this.network.subscribe(this)
	}
	
	moveTo(distance) {
		this.distance += distance
	}
	shout(message) {
		this.network.broadcast(message)
	}
	hear(message) {
		this.messages.push(message)
	}
	messagesHeard() {
		return this.messages
	}
}

class Network {

}

module.exports = {Person, Network}
