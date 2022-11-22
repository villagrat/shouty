Feature: Shout
	
	Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.
	
	ToDo:
		- only shout to people within a certain distance
	
	Background:
		Given a person named Lucy
		And a person named Sean
	
	Rule: Shouts can be heard by other users

	Scenario: Listener hears a message
		When Sean shouts "free bagles at Sean's"
		Then Lucy hears Sean's message
		
	Scenario: Listener hears a different message
		When Sean shouts "free coffee!"
		Then Lucy hears Sean's message

	Rule: Shouts should only be heard if listener is withing range

	Scenario: Listener is withing range
	
	Scenario: Listener is out of range
