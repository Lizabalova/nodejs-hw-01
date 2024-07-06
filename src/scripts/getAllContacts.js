import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    return fileContent;
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error;
  }
};

(async () => {
  try {
    const contacts = await getAllContacts();
    console.log(contacts);
  } catch (error) {
    console.error('Failed to get contacts:', error);
  }
})();
