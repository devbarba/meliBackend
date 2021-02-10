import config from './configs/environment.config';

import app from './app';

app.listen(config.server.port, config.server.host, () => {
    console.log(
        `[meliBackend] Server running at: http://${config.server.host}:${config.server.port}`
    );
});
