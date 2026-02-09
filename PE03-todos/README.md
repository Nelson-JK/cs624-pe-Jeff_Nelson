# Input
The input stage of this project involved the Textinput component to receive input from the user of the app, and in this case it was a list of 'to do' items. The keyboard entries trigger the inputChange function which updates the information 
stored in state in the form of the inputValue. Logging provided a record of each keystroke in the todo list entries. 

# Process
After entering the todo task, the 'Submit' button press triggers the addTodo function. An object is created from the entry, and the spread operator adds the new todo entry into the todo array. The state is updated using setState to log the entry in the terminal output showing the keystrokes. 

# Output
The output is the list of todo items entered by the user seen on the screen of the device using the app. The entered tasks are seen on the screen in the order entered. The text input box is cleared after each task entry and the task is seen below the text input box. Real-time display of the keystrokes is shown in terminal. 

# Screenshots
Please see in Screenshots file 

