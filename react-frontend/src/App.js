import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

// const jobList = [
//   {
//     id: "job1",
//     title: "Full Stack Developer",
//     description: "Description 1",
//     experienceRequired: 3,
//   },
//   {
//     id: "job2",
//     title: "Software Engineer 1",
//     description: "Description 2",
//     experienceRequired: 5,
//   },
// ];

function App() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/job").then((response) => {
      setJobList(response.data);
    });
  }, []);
  const JobCards = jobList.map(job => 
    <Card key={job._id} {...job}/>
  );
  return (
    <div>
      {JobCards}
    </div>
  );
}

export default App;
