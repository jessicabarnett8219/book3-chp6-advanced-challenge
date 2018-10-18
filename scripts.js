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

// function to build messages and append to the fragment. calling the message builder function within
const addMessageSection = (content) => {
  let messageSection = buildMessageSection(content)
  fragment.appendChild(messageSection)
  return messageSection
}


// calling the function to build and add each of the messages to the fragment

addMessageSection("hey ya'll");

addMessageSection("chicken monkey")

addMessageSection("more chat")

addMessageSection("hmmm")

addMessageSection("wow")



// // appending the fragment
const messages = document.querySelector("#messages")
messages.appendChild(fragment)