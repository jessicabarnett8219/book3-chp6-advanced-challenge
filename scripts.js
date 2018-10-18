// Put an article DOM element in your index.html with the id attribute value of messages.
  const messagesArticle = document.createElement("article")
  messagesArticle.setAttribute("id", "messages")
  messagesArticle.innerHTML = "Family Chat"
  document.body.appendChild(messagesArticle)



// creating the fragment
const fragment = document.createDocumentFragment()


// function to build messages

const buildMessageSection = (content) => {
  let messageSection = document.createElement("section")
  messageSection.className = "message"
  messageSection.textContent = content
  return messageSection
}

// calling the function to build the messages and then appending them to fragment

const section1 = buildMessageSection("hey ya'll")
fragment.appendChild(section1)

const section2 = buildMessageSection("chicken monkey")
fragment.appendChild(section2)

const section3 = buildMessageSection("more chat")
fragment.appendChild(section3)

const section4 = buildMessageSection("hmmm")
fragment.appendChild(section4)

const section5 = buildMessageSection("wow")
fragment.appendChild(section5)



// // appending the fragment
const messages = document.querySelector("#messages")
messages.appendChild(fragment)