export const SERVER_PORT = 3000;
export const SERVER_HOST_IP = "127.0.0.1";
export const SERVER_GAME_MODE = 0;
export const SERVER_TICK_INTERVAL = 1; // better dont change
export const SERVER_SAVE_INTERVAL = 1e3 * 60; // 1min
export const SERVER_MAX_CONNECTIONS = 64;
export const SERVER_PLAYER_CONNECTION_TIMEOUT = 1e3 * 60 * 30; // 30min

export const SERVER_LOG_REQUESTS = true;

export const SERVER_DEFAULT_CONSOLE_COLOR = 32;

export const ASSET_DIGEST_PATH = "0005368950BD6068_ASSET_DIGEST";

export const MINIMUM_CLIENT_VERSION = "0.33.0";

export const SERVER_MONGO_PORT = 27017;
export const SERVER_MONGO_HOST_IP = "localhost";
export const SERVER_MONGO_DB_NAME = "pokemongo";
export const SERVER_MONGO_COLLECTION_USERS = "users";
export const SERVER_MONGO_URL = `mongodb://${SERVER_MONGO_HOST_IP}:${SERVER_MONGO_PORT}/${SERVER_MONGO_DB_NAME}`;

export const SERVER_GMAPS_API_KEY = "AIzaSyDF9rkP8lhcddBtvH9gVFzjnNo13WtmJIM";

export const SERVER_POGO_CLIENT_USERNAME = "USERNAME";
export const SERVER_POGO_CLIENT_PASSWORD = "PASSWORD";