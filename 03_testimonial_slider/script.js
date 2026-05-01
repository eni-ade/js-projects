const authorImg = document.querySelector(".author-img");
const message = document.querySelector(".message");
const authorName = document.querySelector(".author-name");

const testimonies = [
  {
    name: "Mark Guiu",
    message:
      "The service was absolutely fantastic from the moment I walked in. I couldn't be happier with the results and will definitely be coming back again.",
    image:
      "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwaGVhZHNob3R8ZW58MHx8MHx8fDI%3D",
  },
  {
    name: "Bob Glover",
    message:
      "Truly a wonderful experience from start to finish. The team was professional, attentive, and made sure every detail was taken care of.",
    image:
      "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwaGVhZHNob3R8ZW58MHx8MHx8fDI%3D",
  },
  {
    name: "Daniella Caruso",
    message:
      "I would highly recommend this to anyone looking for quality and reliability. They went above and beyond to make sure I was completely satisfied.",
    image:
      "https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    name: "Brianna Bailey",
    message:
      "Outstanding support and an amazing product overall. I was blown away by how smooth the entire process was from beginning to end.",
    image:
      "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8Mg%3D%3D",
  },
];

let index = 0;
authorImg.style.backgroundImage = `url("${testimonies[index].image}")`;
message.textContent = testimonies[index].message;
authorName.textContent = testimonies[index].name;

setInterval(() => {
  index++;
  if (index >= testimonies.length) {
    index = 0;
  }
  authorImg.style.backgroundImage = `url("${testimonies[index].image}")`;
  message.textContent = testimonies[index].message;
  authorName.textContent = testimonies[index].name;
}, 3000);
