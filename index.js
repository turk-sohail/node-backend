const app = require("./src/app");
const { ServerConfig, Logger } = require("./src/config");
//App Bootstrap Code


app.listen(ServerConfig.PORT, () => {
    Logger.info(`server is running on port ${ServerConfig.PORT}`)
});
