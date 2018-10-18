// Put an article DOM element in your index.html with the id attribute value of messages.
  const messagesArticle = document.createElement("article")
  messagesArticle.setAttribute("id", "messages")
  messagesArticle.innerHTML = "Family Chat"
  document.body.appendChild(messagesArticle)



// creating the fragment
const fragment = document.createDocumentFragment()


// building the messages and adding to the fragment
const section1 = document.createElement("section")
section1.className = "message"
section1.textContent = "hey ya'll"
fragment.appendChild(section1);

const section2 = document.createElement("section")
section2.className = "message"
section2.textContent = "chicken monkey"
fragment.appendChild(section2);

const section3 = document.createElement("section")
section3.className = "message"
section3.textContent = "more chat"
fragment.appendChild(section3);

const section4 = document.createElement("section")
section4.className = "message"
section4.textContent = "hmmmmmm"
fragment.appendChild(section4);

const section5 = document.createElement("section")
section5.className = "message"
section5.textContent = "wow"
fragment.appendChild(section5);

// appending the fragment
const messages = document.querySelector("#messages")
messages.appendChild(fragment)