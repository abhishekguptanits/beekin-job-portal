const express = require("express");
const cors = require('cors');
const Job = require('./models/job');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
const path = require('path');

/************ DB Connection Setup Started... ************/
const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/job-portal';
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
/************ DB Connection Setup Finished ************/

app.get("/job", async(req, res) => {
    const jobList = await Job.find();
    res.send(jobList);
});

app.post("/job", async(req, res) => {    
    const job = req.body;
    const newJob = new Job(job);
    await newJob.save();
    res.status(201);
    res.send('Job created successfully!')
});

app.patch("/job/:id", async(req, res) => {
    const {id} = req.params;
    const job = req.body;
    const updatedJob = await Job.findByIdAndUpdate(id, job, {new: true});
    res.status(200);
    res.send(updatedJob);
});

app.delete("/job/:id", async(req, res) => {
    const {id} = req.params;
    const deletedJob = await Job.findByIdAndDelete(id);
    res.send(deletedJob);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
