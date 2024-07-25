import { App } from "./app";
import { StartCommand } from "./entities/commmands/start";
import "dotenv/config"

const app = new App([
    new StartCommand()
]);
app.launchBot();