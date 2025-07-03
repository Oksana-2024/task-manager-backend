import { initMongoConnection } from "./db/initMongoConnection.mjs";
import { startServer } from "./server.mjs";

const setupServer = async () => {
  await initMongoConnection();
  startServer();
};

void setupServer();
