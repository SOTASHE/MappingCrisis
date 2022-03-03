# MappingCrisis


## live version:  https://fathomless-meadow-32059.herokuapp.com/

### How it works?

User Flow:
- Register with your username, email, password ( I have made it simple that you can put any gmail and password, must be a minimum of 6 strings)
- After registered, allow browser to store your username and password for the next visit.
- Login on the system with your username and password
- When you have login, you will see crisis from other users marked purple.
- So you double click on your location and log crisis. Your Crisis will be marked Red and other users crisis will be purple.
- You also have an option to logout


Reeact.js - Node.js Full-stack mapping crisis app 

- Users can add crisis in their location and report, also share with other users.


### Built with
- React](https://reactjs.org/) - JS library
- React hooks,
- Mapbox, 
- CSS
- Material UI
- Express, 
and 
- MongoDB. 

### Steps followed
- Creating Node.js Express App
- Connecting MongoDB with Mongoose
- Creating Node.js Rest API
- Node.js Login and Register System
-  Creating a React App
- Using React Mapbox 
- Creating Mapbox Marker
- Creating Mapbox Popup
- React Fetching data from Node.js using Axios
- React Mapbox adding new crisis by location
- React Post request using Axios (Connecting node.js with react)
- React Login and Register Page
- Mern Stack Login and Register System
- Using React Local Storage to store data temporal
- React Logout System using Local Storage








### Want to run your own instance of the app?  The requirements to build from source are:

## I have included my API keys in the code just so you wont have to be setting up stuff. But you still can follow the following to generate your own API keys:


- Create Mongo DB https://account.mongodb.com/account/login?n=%2Fv2%2F6202fdff202c3f47248e22e6&nextHash=%23metrics%2FreplicaSet%2F621bc8efcad26071f1067943%2Fexplorer%2FMapping_Crisis%2Fcrisis%2Ffind
- Coonect to mongo db using your own Mongo API KEY,  Choose a connection method by selecting Connect your application. You will get the api key 
- Create a .env file and fill it with your MongoDB API key
- inside .env file put Mongo API key in the variable
    ###### MONGO_URL= "  "
- You can get these by
     Creating Mongo DB https://account.mongodb.com/account/login?       n=%2Fv2%2F6202fdff202c3f47248e22e6&nextHash=%23metrics%2FreplicaSet%2F621bc8efcad26071f1067943%2Fexplorer%2FMapping_Crisis%2Fcrisis%2Ffind
     
 
 - You can go to inside app.js 
   and replace  
   ###### mapboxApiAccessToken="pk.eyJ1Ijoic25heWUtc290YXNoZSIsImEiOiJjbDA2MHN4dTEwYzR5M2pubmk0Mmo2aDk3In0.LxXpxLF9MffWbjrL-_ZJLA" 
     
- with your own mapbox api token, use this link https://www.mapbox.com/ to create your own. But you can still use mine. It's free to use.

     
- NodeJS/NPM
- First, clone the project repository


## Running both frontend and backend concurrently:
   simple run the following:
           
             cd backend
             npm install
             npm run dev
   The above scripts will run both frontend and backend at the same time. I have nested frontend inside the backend folder.




 ## If you wanna run frontend and backend seperatly, do the following.
  
### To run the backend

            cd backend
            npm install 
            npm start



### To run the frontend
     
        cd frontend


        npm install
        npm start
        
        
        
        
        
 








