# Listspotter

Listspotter is an application that lets users create genre based playlists of tracks they have saved in their Spotify accounts. <br>
With Listspotter it is quick and easy to have a coherent playlist out of the songs you already like, in just a few minutes.

## Screenshots

![listspotterSS3](https://user-images.githubusercontent.com/65975591/113475350-5c90a580-9475-11eb-9407-3982e427a6ba.png)

![listspotterSS4](https://user-images.githubusercontent.com/65975591/113475359-674b3a80-9475-11eb-8140-c23d0e5996e9.png)

![listspotterSS5](https://user-images.githubusercontent.com/65975591/113475362-6c0fee80-9475-11eb-981a-da925b7308ef.png)

##

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

3. Directly under the "server" folder, add a config.js file that exports your client ID, client secret key, redirect uri and Spotify's token link (make sure you ignore this file on git!!).

```
module.exports = {
  clientID: // YOUR CLIENT ID HERE,
  clientSecret: // YOUR CLIENT SECRET HERE,
  redirectUri: // YOUR REDIRECT URI HERE,
  spotifyTokenUrl: 'https://accounts.spotify.com/api/token'
};
```

4. Under "src" folder in your client, add a config.js file that exports your client ID, redirect uri and server url(ignore this file on Git too).

```
module.exports = {
  clientId: // YOUR CLIENT ID HERE,
  redirectUri: // YOUR REDIRECT URI,
  serverBaseUrl: // SERVER URL HERE, ex: 'http://localhost:3001'
};
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

##

# Teck Stack

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/)
- [TypeScript](https://www.typescriptlang.org/)

# Contributors ✨

Github's and LinkedIn's linked below! ([emoji key](https://allcontributors.org/docs/en/emoji-key))

Original project credits go to [Mert Ascioglu](https://github.com/ascolm)

<table>
  <tr>
    <td align="center"><a href="https://github.com/pamelakaylin"><img src="https://avatars.githubusercontent.com/u/59074533?v=4" width="120px;" alt=""/><br /><sub><b><a href="https://www.linkedin.com/in/pamelakaylin/" title="linkedin">Pamela Chen</a></b></sub></a><br /><a href="code-pamela" title="Code">💻</a> <a href="#test-pamela" title="Tests">⚠️</a> <a href="#main-pamela" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/geroalexander"><img src="https://avatars.githubusercontent.com/u/59166685?v=4" width="120px;" alt=""/><br /><sub><b><a href="https://www.linkedin.com/in/gero-kassing-9b79311a3/" title="linkedin">Gero Kassing</a></b></sub></a><br /><a href="code-gero" title="Code">💻</a> <a href="#test-gero" title="Tests">⚠️</a> <a href="#main-gero" title="Maintenance">🚧</a></td>
  </tr>
</table>
