Feature: Hear shout
	Scenario: Listener is within range
		Given Lucy is located 15 metres from Sean
		When Sean shouts "free bagles at Sean's"
		Then Lucy hears Sean's message
	Scenario: Listener hears a different message
		Given Lucy is located 15 metres from Sean
		When Sean shouts "free coffee!"
		Then Lucy hears Sean's message
