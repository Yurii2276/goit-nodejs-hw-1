const fs = require('fs/promises');
const path = require('path');

const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

async function listContacts() {
    try {
      const data = await fs.readFile(contactsPath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  async function getContactById(contactId) {
    try {
      const contacts = await listContacts();
      return contacts.find(contact => contact.id === contactId) || null;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  async function removeContact(contactId) {
    try {
      const contacts = await listContacts();
      const index = contacts.findIndex(contact => contact.id === contactId);
      if (index === -1) return null;
      
      const [removedContact] = contacts.splice(index, 1);
      await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
      return removedContact;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  async function addContact(name, email, phone) {
    try {
      const contacts = await listContacts();
      const newContact = {
        id: uuidv4(),
        name,
        email,
        phone,
      };
      
      contacts.push(newContact);
      await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
      return newContact;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };