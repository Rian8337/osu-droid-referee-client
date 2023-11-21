# osu!droid Referee Client

A web client for referees to use in conjunction with a [custom osu!droid tournament client](https://github.com/Rian8337/osu-droid/tree/tournament-client). This web client allows you to open and manage a multiplayer room via multiplayer commands without having to launch the game.

You may use the web client [here](https://droidpp.osudroid.moe/referee) or build it by yourself.

## Building

To build the application, you need Node.js version 18 or later.

Begin by installing dependencies:

```sh
npm i
```

Afterwards, you may choose one of the following configurations:

-   Production

    ```sh
    npm run build
    npm run preview
    ```

-   Development
    ```sh
    npm run dev
    ```

Open the given link in your browser of choice.

## Debugging with Local Server

Unfortunately, debugging with a local server is not possible as the server that the client connects to is closed-source.
