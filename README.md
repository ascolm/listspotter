# Listspotter
Listspotter is an application that lets users create genre based playlists of tracks they have saved in their Spotify accounts. <br>
With Listspotter it is quick and easy to have a coherent playlist out of the songs you already like, in just a few minutes.

## Screenshots
![listspotterSS3](https://user-images.githubusercontent.com/65975591/113475350-5c90a580-9475-11eb-9407-3982e427a6ba.png)

![listspotterSS4](https://user-images.githubusercontent.com/65975591/113475359-674b3a80-9475-11eb-8140-c23d0e5996e9.png)

![listspotterSS5](https://user-images.githubusercontent.com/65975591/113475362-6c0fee80-9475-11eb-981a-da925b7308ef.png)

## Getting Started
Listspotter uses Spotify Web API and as such, you will need to register your app in Spotify's Dashboard [here.](https://developer.spotify.com/dashboard/login). After registration you should have a client ID, a client secret and have your redirect URL entered in project settings (the URL that Spotify will redirect your user to after login - default would be the port used by your local React app). In case needed, you can find additional information [here.] (https://developer.spotify.com/documentation/general/guides/authorization-guide/). Note that this project uses Authorization Code Flow.

After you register with Spotify, follow the steps below for setup:

1. Clone the repo
```
git clone https://github.com/ascolm/listspotter.git
cd listspotter
```

2. Install dependencies
```
npm install
```

3. Directly under the "server" folder, add a config.js file that exports your client ID and client secret key (make sure you ignore this file on git!!).
```
module.exports = {
  clientID: // YOUR CLIENT ID HERE
  clientSecret: // YOUR CLIENT SECRET HERE
};
```

4. You can run your server using nodemon to watch for changes:
```
cd server
nodemon
```


5. Navigate to client folder and launch the React app:
```
npm start
```
