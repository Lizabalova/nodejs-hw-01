import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const readContacts = async (path) => {
  try {
    const fileContent = await fs.readFile(path, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading contacts file:', error);
    throw error;
  }
};

const writeContacts = async (path, contacts) => {
  try {
    await fs.writeFile(path, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Successfully saved contacts.');
  } catch (error) {
    console.error('Error writing contacts file:', error);
    throw error;
  }
};

const addOneContact = async () => {
  try {
    const contacts = await readContacts(PATH_DB);
    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeContacts(PATH_DB, contacts);
    console.log('Successfully added one new contact.');
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

addOneContact();
