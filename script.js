// Typewriter effect
var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString("Cloud Engineer ☁️")
  .pauseFor(1500)
  .deleteAll()
  .typeString("DevOps Enthusiast ⚡")
  .pauseFor(1500)
  .deleteAll()
  .typeString("AWS | Kubernetes | Terraform 🚀")
  .pauseFor(1500)
  .deleteAll()
  .typeString("Cloud Security Advocate 🔒")
  .pauseFor(1500)
  .start();

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();
