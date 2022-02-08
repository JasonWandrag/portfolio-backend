const express = require("express");
const app = express.Router();
const fixArrayId = require("../helpers");

let testimonials = [
  {
    id: 1,
    name: "Anam Bianca Majikijela",
    position: "Junior Implementation LXD @ Cognition",
    quote:
      "Jason is a fantastic web developer, mentor, and coworker. He is enthusiastic and caring about people and his work. He has had an impact on many people, and any company would be fortunate to have him.",
  },
  {
    id: 2,
    name: "Shane Morne Kolkoto",
    position: "Application Developer & Tester @ LC Studio",
    quote:
      "Jason is one of the most hard working and talented developers I know. He has excellent communication and interpersonal skills, problem solving skills and is a great team player. I would certainly recommend him for any team as I know that he has a lot to bring to the table.",
  },
  {
    id: 3,
    name: "Jeandre Awood",
    position: "Full Stack Developer @ LC Studio",
    quote:
      "I had the pleasure of being taught the fundamentals of coding by Jason. As a lecturer, Jason is an individual that would try his utmost to convey concepts in a manner that you and everyone else in the class could understand. He has a nice balance between theory and practical exercises that cater to various individuals and their learning styles. Henceforth, this displays his passion for teaching, uplifting, and upskilling individuals to the best of his ability making sure he is available for help so that no one is left behind.",
  },
  {
    id: 4,
    name: "Machai Bulawayo",
    position: "Web Developer & Software Engineer",
    quote:
      "Jason is a very talented and clever front – end engineer, a pure classic geek amongst his peers, not only does he do web development and its associated technologies, but he is also does game development and design, he’s a great teacher amongst other things, I have seen him in action upskilling young adults on how to write code and programming.",
  },
  {
    id: 5,
    name: "Junaid Salie",
    position: "Junior Web Developer",
    quote:
      "As a student of Jason, I can tell you that he is hard working and he strives to help his students. He has a good sense of humour and always seeks to upskill himself in the way he teach or learn new technologies. In overall a good lecturer when you put his skills and attributes together.",
  },
  {
    id: 6,
    name: "Byron Lee Tinker",
    position: "Junior Web Developer @ DrakkenTech",
    quote:
      "Jason is an exetremely awesome lecturer, he aspires to do his best at helping everyone in need. You can always count on him, no matter how big your errors may seem. He is an incredibily hardworking developer and always gets the job done with the best possible result. He always tries to put a smile on your face or even brighten up your day even when you are not in the mood. Jason has a wonderful personality and a great sense of humor. I would highly recommend him.",
  },
  {
    id: 7,
    name: "Oslin Johnson",
    position: "Application Developer Team Lead @ LC Studio",
    quote:
      "Jason is a well-versed developer and educator when it comes to web development. The time spent with him picking his brain and developing alongside him, made me a better developer as well. Jason brings a wealth of knowledge to the table with the ability to solve almost any possible hurdle in front of him. I would recommend him for any technical services that are required every time.",
  },
  {
    id: 8,
    name: "Aashiq Adams",
    position: "Full Stack Developer",
    quote:
      "Jason is the epitome of an amazing developer and teacher. He is capable of dealing with a myriad of personalities while still assuring the task at hand is completed timeously and with great quality. He remains cool and collected at all times, and boosts the morale of any room he enters. Having worked directly under him, I can definitively say that he is the senior which any junior dreams to have.",
  },
];

// GET ALL TESTIMONIAL
app.get("/", (req, res) => {
  res.send(testimonials);
});

// GET ONE TESTIMONIAL
app.get("/:id", (req, res) => {
  const testimonial = testimonials.find(
    (testimonial) => testimonial.id == req.params.id
  );
  if (!testimonial) res.status(404).send({ msg: "Testimonial not found" });
  res.send(testimonial);
});

// CREATE A TESTIMONIAL
app.post("/", (req, res) => {
  let { name, position, quote } = req.body;
  if (!name || !position || !quote)
    res.status(400).send({ msg: "Not all information sent" });

  let testimonial = {
    id: projects.length + 1,
    name,
    position,
    quote,
  };
  testimonials.push(testimonial);
  res.send(testimonial);
});

// UPDATE A Testimonial
app.put("/:id", (req, res) => {
  // FIND PROJECT INDEX IN PROJECTS
  let testimonial = testimonials.find(
    (testimonial) => testimonial.id == req.params.id
  );
  // IF NO PROJECT FOUND, SEND ERROR
  if (!testimonial) res.status(404).send({ msg: "Testimonial not found" });
  // GET DATA FROM REQUEST BODY
  let { name, position, quote } = req.body;

  // WRITE DETAILS TO PROJECT
  if (name) testimonial.name = name;
  if (position) testimonial.position = position;
  if (quote) testimonial.quote = quote;
  // SEND UPDATED PROJECT
  res.send(testimonial);
});

// DELETE A PROJECT (remove from array)
app.delete("/:id", (req, res) => {
  testimonials = testimonials.filter(
    (testimonial) => testimonial.id != req.params.id
  );
  fixArrayId(testimonials);
  res.send({ msg: "Recommendation Removed" });
});

module.exports = app;
