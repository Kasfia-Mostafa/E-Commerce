import config from "./app/config";
import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(port, () => {
      console.log(`E-Commerce app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
