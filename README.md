ConfirmActionButton
----

ConfirmActionButton is a react component that displays a confirmation dialog
before performing an action after being clicked.

Sample Usage
----

	<ConfirmActionButton
		action={foo.delete}  // The function to perform after confirmation
		onOpen={console.log('Opened ...')}  // Fuction to call after opening.
		// Fuction to call after closing, regardless of confirmation.
		onClose={console.log('Closed ...')}
		className="delete-button"
		callToAction="Delete"
		title="Are you sure you want to delete this foo?"
		message="Deleting this foo is an irreversible action."
		confirmMessage="Delete"
		cancelMessage="Cancel"
	/>

Available Props
----

- action

	The function to perform after confirmation.

- skip

	If true the action is going to be performed without displaying the prompt.

- onOpen

	Fuction to call after opening.

- onClose

	Fuction to call after closing, regardless of confirmation.

- className

	A class name to be added to the button and the dialog allong with the
	builtin ones (confirm-button, confirm-prompt)

- callToAction

	The message displayed on the button.

- title

	The prompt title.

- message

	The prompt message.

- confirmMessage

	The message on the confirmation button in the prompt.

- cancelMessage

	The message on the cancelation button in the prompt.

- actionUrl

	A url to navigate after confirmation instead of a function to be performed.
	Do **not** use it will be deprecated in subsequent versions.
