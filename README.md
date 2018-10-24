# max_angular
# env setup 
Install node to machine
install npm
use npm to install typescript
 - sudo npm install -g typescript
 install angular cli
 - sudo npm install -g @angular/cli 
# Run single files
Conver .ts to .js so you can run:
 - tsc .\<filename>.ts --target ES5
 - node .\<filename>.js
# New project
- ng new PROJECTNAME(cannot contain special characters)
# Build and Run project
	-	ng serve [option]
#Build a user server for testing 
	- mkdir <server dir name>
	- npm install prs-webapi-server
	- add '"start": "node node_modules/prs-webapi-server/server.js",' to package.json in that dir
	-  'npm start' to start server from inside of the dir
	- This creates an empty user api server on port 5000(localhost:5000) to point an app to for testing
# notes
- create a new component for each action 
