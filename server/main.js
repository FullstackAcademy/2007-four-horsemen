const app = require('./index');
const PORT = 3000;
const {
  db,
  models: { Product, User, Order, Shipment, Cart },
} = require('./db');

const init = async () => {
  try {
    await db.sync().then(() => {
      app.listen(PORT, () =>
        console.log(`
        listening on port: ${PORT}
        listening on http://localhost:${PORT}
        listening on http://127.0.0.1:${PORT}
        `)
      );
    });
  }
  catch(err){
    console.log(err)
  }
  };

init();
