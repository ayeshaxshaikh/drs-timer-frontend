Frontend (React)
----------------

The frontend is built using React, with Socket.IO for real-time updates.

# Components
# Timer.jsx
* Displays the countdown timer and listens for real-time updates from the server.

# TimerControl.jsx
* Allows control over starting and resetting the timer.

# TimerCreation.jsx
* Handles the creation of a new timer.


# Usage Flow
# Timer Creation:
* The user clicks "Create Timer" on the TimerCreation page.
* A new timer is created with a unique ID (tm-xxx), and the Timer page opens in a new tab with the URL containing the unique ID.

  
# Timer Control:
* The user opens the TimerControl page with the timer's unique ID (/control/:uniqueId).
* The "Start Timer" button starts the countdown from 15.
* The "Reset Timer" button resets the timer back to 15.

# Real-Time Updates:
* The Timer page listens for real-time updates, displaying the current time to all users connected to the timer.

