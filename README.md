# Personal Capital
## Interview test for Personal Capital

This is the test requested by Personal Capital.

###Install

####Dependencies 

This project runs on Node.js, you need to donwnload it [here](https://nodejs.org/en/).

Once installed you'll need grunt.

    `npm install -g grunt`

The App is separated in two layers:
- Front end in folder `client/`
- Back end (API) in folder `server/`

##### Front end

To build the front end App go to `client` folder and run:

    `npm install && bower install && sudo gem install compass  && gulp build`
  
This will build the site and put it on `server/dist`so we serve the application and the API from the same server (for development purposes).

##### Back end

To build and run the back-end go to `server`folder and run:

    `npm install`
    
### Run

To run the Application go to `server/`folder and execute:

    `npm start`

Then the App will be running on [localhost:3000](http://localhost:3000)


Comments are spread out on the main components.

//TODO
Implement karma test
