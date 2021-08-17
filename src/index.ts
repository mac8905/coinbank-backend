import { app, connectDB, PORT } from "./config/";

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
  connectDB();
});
