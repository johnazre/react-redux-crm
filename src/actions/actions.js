
export function addContact(text) {
    return {
      type: "ADD_CONTACT",
      text: text
    }
}

export function removeContact(id) {
    console.log("ID in actions.js", id)
    return {
      type: "REMOVE_CONTACT",
      id: id
    }
}
