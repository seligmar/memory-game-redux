# Memory-Game-Redux

This app is a memory game in which the player clicks on the back of two cards, revealing two paintings, out of a board consisting of eight pairs of randomly selected paintings from a collection of 98 possible paintings in the data collection. The app uses React and Redux and is animated with CSS.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

This project uses bcrypt with a username and one-way hashed encryption using bcrypt

You may need to manually activate
gem 'rack-cors'
gem 'bcrypt', '~> 3.1.7'
and then run bundle install again.

rails s -p 3001 (or whichever port)

To prevent the need for 'prop drilling' and other challenges related to state, this app uses Redux; for an example of a similar project using regulr React please see an alternative framework I created here: https://github.com/seligmar/Campaign-2020

# Prerequisites

What things you need to install the software and how to install them

To include the Google Map functionality, you will need to aquire a Google API key and create a file to gitnore. Informaiton about how to do so is available here:

https://gist.github.com/derzorngottes/3b57edc1f996dddcab25

# Give examples

Installing
A step by step series of examples that tell you how to get a development env running

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

# Give an example

And coding style tests
Explain what these tests test and why

# Give an example

Deployment
Add additional notes about how to deploy this on a live system

# Built With

This app uses

sweetalert2-react-content

https://www.npmjs.com/package/sweetalert2-react-content

semantic-ui-css

https://www.npmjs.com/package/semantic-ui-css

# Authors

# Acknowledgments
