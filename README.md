--- INSTRUCTIONS ---

WELCOME TO THE LADDER MESSAGE BOARD 

In order to run this application please perform the following steps:

1) Clone the repo to your local machine
2) Open the directory containing the repo and run npm install
3) Once all of the dependencies are installed, please run npm start
4) The web app should open in your defaul broswer at localhost:3000

In order to use this application please complete the Mock Sign In (Any username and password will work)

One signed in, you will be taken to the Main Message Board where you can see all the messages from
other users and can add messages of your own.

You may sign out at anytime by clicking the Sign Out button up top.

In order to post a messages, just type it in the input field at the top of the app and 
press 'Enter' on your keyboard or click the Send button.

Messages are sorted in chronological order with the most recent messages being first and messages
get older as you scroll down.

Enjoy!

--- FOLLOW-UP QUESTIONS ---

1) Additional Features:
  a) Mock Sign-In and Sign-Out button - Auth was not enabled so its just for show
  b) Alert if message is left blank
  c) Delete Messages (frontend only, doesnt persist to database)

2) How would you change the database structure?
  I think it would be helpful to store the UserID associated with each message. This way you can allow users to edit or delete posts that belong to them.

3) I had never seen or worked with Firebase before this challenge so that was definitely the hardest part for me. It took me quite a while to read through all of the documentation and understand what Firebase is, what its benefits are, how to link it to a React database, and what Firestore is and how to interact with it. I wish that some of the other features were enabled such as the Realtime Database. A lot of the information I found online concerning Firebase and React assumed I had the Realtime DB set up so it was pretty difficult to piece together documentation and online resources from a bunch of different sources in order to get this app to work.

4) I thought this was a good challenge. The difficulty for me came from my unfamiliarity with Firebase and not from the challenge itself. 