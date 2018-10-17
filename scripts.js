// Put an article DOM element in your index.html with the id attribute value of messages.
  const messagesArticle = document.createElement("article")
  messagesArticle.setAttribute("id", "messages")
  messagesArticle.innerHTML = "Family Chat"
  document.body.appendChild(messagesArticle)

// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.

const target = document.querySelector("#messages")
console.log(target)

// Create five (5) section components, each with a class of message, and with the content of your choosing.

const section1 = document.createElement("section")
section1.className = "message"
section1.textContent = "hey ya'll"
messagesArticle.appendChild(section1);

const section2 = document.createElement("section")
section2.className = "message"
section2.textContent = "chicken monkey"
messagesArticle.appendChild(section2);

const section3 = document.createElement("section")
section3.className = "message"
section3.textContent = "more chat"
messagesArticle.appendChild(section3);

const section4 = document.createElement("section")
section4.className = "message"
section4.textContent = "hmmmmmm"
messagesArticle.appendChild(section4);

const section5 = document.createElement("section")
section5.className = "message"
section5.textContent = "wow"
messagesArticle.appendChild(section5);

// Using appendChild(), attach each message as a child to the messages element.