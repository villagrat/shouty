const MAXIMUM_HEARING_DISTANCE = 80

class Person {
	distance = 0
	heard = []
	moveTo(distance) {
		this.distance += distance
	}
	shout(message) {
		this.heard.push(message)
		console.log('some Person shouted: ', message)
	}
	hear(message) {
		this.heard.push(message)
		console.log('some Person heard: ', message)
	}
	messagesHeard() {
		console.log('messages heard for Person: ', this.heard[0])
		return this.heard
	}
}

module.exports = Person
