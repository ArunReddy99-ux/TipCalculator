# TipCalculator

A simple React-based Tip Calculator application that allows users to calculate the total amount they need to pay, including a tip based on service satisfaction. Both the user and their friend can input their service satisfaction levels to compute an average tip.

# Features
Bill Input: Enter the total bill amount.
Tip Selection: Choose the tip percentage based on service satisfaction from both the user and their friend.
Total Calculation: Automatically calculates the total amount including the tip.
Reset Functionality: Clears all inputs and resets the application state.
# Components
1. App
The root component that renders the TipCalculator component.
2. TipCalculator
Manages the state for the bill amount, tip percentages, and reset functionality.
Renders the Bill, Selectpercent, Ttl, and Reset components.
3. Bill
Accepts user input for the bill amount.
Props:
amount: Current bill amount.
setamount: Function to update the bill amount.
setOpen: Function to open the tip calculation display.
4. Selectpercent
Dropdown component to select the tip percentage based on service satisfaction.
Props:
amt: Selected tip percentage.
onSelect: Function to update the selected tip percentage.
children: Label text for the dropdown.
5. Ttl
Displays the total amount to be paid, including the calculated tip.
Props:
at: The entered bill amount.
fa: Friend's selected tip percentage.
mat: User's selected tip percentage.
onOpen: Boolean to toggle display visibility.
6. Reset
Button to reset the application state.
Props:
onClick: Function to reset the state.
onOpen: Boolean to toggle button visibility.
# State Management
amount (bill amount): Tracks the bill value entered by the user.
amt (user's tip percentage): Tracks the tip percentage selected by the user.
frndamt (friend's tip percentage): Tracks the tip percentage selected by the friend.
isOpen (visibility toggle): Controls the visibility of the calculated total and reset button.
# Technologies Used
React: For building the user interface.
useState Hook: For managing component state.
CSS: For styling the application.
