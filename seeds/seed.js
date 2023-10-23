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

const Job = require('../models/job');
const jobs = require('./job');

const seedJobs = async() => {
    await Job.deleteMany({});
    await Job.insertMany(jobs);
    console.log("Find the list of jobs below");
    const jobList = await Job.find();
    console.log(jobList);
    console.log(`Size = ${jobList.length}`);
};

seedJobs();