import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "app-remote-control",
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-library-modify",
  "user-library-read",
  "user-top-read",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-follow-read",
  "user-follow-modify",
].join(",");

const params = {
  scopes: scopes,
};

const queryParams = new URLSearchParams(params);
const LOGIN_URL =
  "https://accounts.spotify.com/authorize/?" + queryParams.toString();

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  const err = new Error(
    "Missing cliendId or clientSecret\nEnsure you have NEXT_PUBLIC_CLIENT_ID and NEXT_PUBLIC_CLIENT_SECRET set as ENV variables"
  );
  throw err;
}

const spotifyWebApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
});

export default spotifyWebApi;

export { LOGIN_URL };
