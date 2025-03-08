const express = require("express");
const app = express();
//routes

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks') - get all tasks
// app.post('/api/v1/tasks') - create a new tasks
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task
const port = 3000;
const start = async () => {
  try {
    await connectDB();
    console.log("connected to mongoDB");
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch {
    console.log("Not able to connect");
  }
};
start();
