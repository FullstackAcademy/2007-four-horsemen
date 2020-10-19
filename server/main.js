const PORT = 5432;
const server = require('./index');
const { syncAndSeed } = require('./db');

syncAndSeed().then(() => {
  server.listen(PORT, () =>
    console.log(`
        listening on port: ${PORT}

        listening on http://localhost:${PORT}

        listening on http://127.0.0.1:${PORT}
        `)
  );
});
