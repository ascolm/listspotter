# Listspotter
Listspotter is an application that lets users create genre based playlists of tracks they have saved in their Spotify accounts. <br>
With Listspotter it is quick and easy to have a coherent playlist out of the songs you already like, in just a few minutes.

## Screenshots
![listspotterSS3](https://user-images.githubusercontent.com/65975591/113475350-5c90a580-9475-11eb-9407-3982e427a6ba.png)

![listspotterSS4](https://user-images.githubusercontent.com/65975591/113475359-674b3a80-9475-11eb-8140-c23d0e5996e9.png)

![listspotterSS5](https://user-images.githubusercontent.com/65975591/113475362-6c0fee80-9475-11eb-981a-da925b7308ef.png)

## Getting Started
Listspotter uses Spotify Web API and as such, you will need to register your app in Spotify's Dashboard [here.](https://developer.spotify.com/dashboard/login) After registration you should have a client ID, a client secret and have your redirect URL entered in project settings (the URL that Spotify will redirect your user to after login - default would be the port used by your local React app) In case needed, you can find additional information [here.](https://developer.spotify.com/documentation/general/guides/authorization-guide/) Note that this project uses Authorization Code Flow.

After you register with Spotify, follow these steps below to get started:

1. Clone the repo
```
git clone https://github.com/ascolm/listspotter.git
cd listspotter
```

2. Install dependencies
```
npm install
```

3. The config file directly under the "server" folder groups environment variables for convenience. Create a .env file in the same folder that has your client ID, client secret key, redirect uri and Spotify's token link (make sure you ignore this file on git!!). The .env file should look like:
```
CLIENT_ID=// YOUR CLIENT ID HERE,
CLIENT_SECRET=// YOUR CLIENT SECRET HERE,
SERVER_HOST=// SERVER HOST, ex: '127.0.0.1',
SERVER_PORT=// SERVER PORT, ex: '3001',
REDIRECT_URI=// YOUR REDIRECT URI HERE,
SPOTIFY_TOKEN_URL='https://accounts.spotify.com/api/token'
```

4. The config file directly under the "client" folder groups environment variables for convenience. Create a .env file in the same folder that has your client ID, redirect uri and server base url (make sure you ignore this file on git too). The .env file should look like:
```
  REACT_APP_CLIENT_ID=// YOUR CLIENT ID HERE,
  REACT_APP_REDIRECT_URI=// YOUR REDIRECT URI,
  REACT_APP_SERVER_BASE_URL=// SERVER URL HERE, ex: 'http://localhost:3001'
```

5. You can run your server using nodemon to watch for changes:
```
cd server
nodemon
```

6. Navigate to client folder and launch the React app:
```
cd ../client
npm start
```

## Tech Stack
### Front End
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)

### Back End
- [Express](http://expressjs.com/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
