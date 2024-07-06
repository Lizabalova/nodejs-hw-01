import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const readContactsFile = async (path) => {
  try {
    const fileContent = await fs.readFile(path, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading contacts file:', error);
    throw error;
  }
};

const writeContactsFile = async (path, contacts) => {
  try {
    await fs.writeFile(path, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Successfully saved contacts.');
  } catch (error) {
    console.error('Error writing contacts file:', error);
    throw error;
  }
};

const generateNewContacts = (number) => {
  return Array.from({ length: number }, createFakeContact);
};

const generateContacts = async (number) => {
  try {
    const contacts = await readContactsFile(PATH_DB);
    const newContacts = generateNewContacts(number);
    contacts.push(...newContacts);
    await writeContactsFile(PATH_DB, contacts);
    console.log(`Successfully added ${number} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
