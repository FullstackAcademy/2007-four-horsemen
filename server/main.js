const app = require('./index');
const PORT = 3000;
const { db } = require('./db');

const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () =>
      console.log(`
        listening on port: ${PORT}
        listening on http://localhost:${PORT}
        listening on http://127.0.0.1:${PORT}
        `)
    );
  } catch (err) {
    console.log(err);
  }
};

init();
