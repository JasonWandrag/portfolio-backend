const express = require("express");
const app = express.Router();
const fixArrayId = require("../helpers");

let projects = [
  {
    id: 1,
    title: "LC Studio Website",
    desc: "I created this website for the launch of LC Studio, a company focused training and promoting new developers",
    stack: "HTML/CSS/JS",
    img: "./images/LC_Studio.png",
    img_alt: "LC Studio Website",
    github: "https://github.com/JasonWandrag/LC_Studio_front_end",
    live: "https://www.lcstudio.co.za/",
  },
  {
    id: 2,
    title: "Splashify",
    desc: "This is a scrollable gallery using the Unsplash API",
    stack: "React/CSS",
    img: "./images/Splashify.png",
    img_alt: "Splashify - The Unsplash Viewer",
    github: "https://github.com/JasonWandrag/splashify",
    live: "https://jason-wandrag-splashify.netlify.app/",
  },
  {
    id: 3,
    title: "Dynamic Theme Switcher",
    desc: "I created this to be able to switch between Neumorphism and Glassmorphism themes. I also ensured that the shadow colors for the Neumophic theme automatically generates with the color given, and that the text also changes according to its background",
    stack: "HTML/CSS/JS",
    img: "./images/Dynamic_Theme_Switcher.png",
    img_alt: "Dynamic Theme Switcher",
    github: "https://github.com/JasonWandrag/dynamic-theme-switcher",
    live: "https://dynamic-theme-switcher.netlify.app/",
  },
  {
    id: 4,
    title: "Basic Platformer",
    desc: "My first 2D sidescroller game made with the Godot Engine",
    stack: "Godot Engine/GDScript",
    img: "./images/2D_Platformer.png",
    img_alt: "Basic Platformer Game",
    github: "https://github.com/JasonWandrag/basic-platformer",
    live: "https://chryptolite.itch.io/basic-platformer",
  },
  {
    id: 5,
    title: "Full page timeline",
    desc: "Mobile responsive fullpage timeline",
    stack: "HTML/CSS",
    img: "./images/Fullpage_timeline.png",
    img_alt: "Fullpage Timeline",
    github: "https://github.com/JasonWandrag/fullpage-experience-resume",
    live: "https://fullpage-timeline.netlify.app/",
  },
  {
    id: 6,
    title: "Bootstrap Point Of Sale",
    desc: "Simple POS using localStorage as the storage method",
    stack: "HTML/CSS/JS",
    img: "./images/Point_of_sale.JPG",
    img_alt: "Point Of Sale",
    github: "https://github.com/JasonWandrag/product-crud",
    live: "https://jason-wandrag-pos.netlify.app/",
  },
  {
    id: 7,
    title: "Trivia Game",
    desc: "Trivia game created with the trivia API",
    stack: "HTML/CSS/JS",
    img: "./images/Trivia.JPG",
    img_alt: "Point Of Sale",
    github: "https://github.com/JasonWandrag/trivia",
    live: "https://jason-trivia-game.netlify.app/",
  },
  {
    id: 8,
    title: "Rider Waite Digital Tarot",
    desc: "Digital Tarot generator with multiple spreads",
    stack: "HTML/CSS/JS",
    img: "./images/Digital_Tarot.JPG",
    img_alt: "Point Of Sale",
    github: "https://github.com/JasonWandrag/digital-tarot",
    live: "https://jason-digital-tarot.netlify.app/",
  },
  {
    id: 9,
    title: "Fake Store",
    desc: "A Vue project that is a PWA, so it can be installed to your local machine. Here I also focused more on design. It is still unfinished (Started 01/31/2021)",
    stack: "Vue.js",
    img: "./images/Fake_Store.JPG",
    img_alt: "Fake Store",
    github: "https://github.com/JasonWandrag/vue-ecommerce",
    live: "https://vue-fake-store.netlify.app/",
  },
  {
    id: 10,
    title: "User List",
    desc: "I challenged myself to create a fully Vanilla, web friendly list. Take a look at the Github read me for more detailsREA",
    stack: "HTML/CSS/JS",
    img: "./images/User_List.JPG",
    img_alt: "User List",
    github: "https://github.com/JasonWandrag/vanilla-user-search",
    live: "https://im-proud-of-this.netlify.app/",
  },
];

// GET ALL PROJECTS
app.get("/", (req, res) => {
  res.send(projects);
});

// GET ONE PROJECT
app.get("/:id", (req, res) => {
  const project = projects.find((project) => project.id == req.params.id);
  if (!project) res.status(404).send({ msg: "Project not found" });
  res.send(project);
});

// CREATE A PROJECT (push to array)
app.post("/", (req, res) => {
  let { title, desc, stack, img, img_alt, github, live } = req.body;
  if (!title || !desc || !stack || !img || !img_alt || !github || !live)
    res.status(400).send({ msg: "Not all information sent" });

  let newProject = {
    id: projects.length + 1,
    title,
    desc,
    stack,
    img,
    img_alt,
    github,
    live,
  };
  projects.push(newProject);
  res.send(newProject);
});

// UPDATE A PROJECT (update item in array)
app.put("/:id", (req, res) => {
  // FIND PROJECT INDEX IN PROJECTS
  let project = projects.find((project) => project.id == req.params.id);
  // IF NO PROJECT FOUND, SEND ERROR
  if (!project) res.status(404).send({ msg: "Project not found" });
  // GET DATA FROM REQUEST BODY
  let { title, desc, stack, img, img_alt, github, live } = req.body;

  // WRITE DETAILS TO PROJECT
  if (title) project.title = title;
  if (desc) project.desc = desc;
  if (stack) project.stack = stack;
  if (img) project.img = img;
  if (img_alt) project.img_alt = img_alt;
  if (github) project.github = github;
  if (live) project.live = live;
  // SEND UPDATED PROJECT
  res.send(project);
});

// DELETE A PROJECT (remove from array)
app.delete("/:id", (req, res) => {
  projects = projects.filter((project) => project.id != req.params.id);
  fixArrayId(projects);
  res.send({ msg: "Item Removed" });
});

module.exports = app;
