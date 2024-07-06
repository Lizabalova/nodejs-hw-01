import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

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

export const removeAllContacts = async () => {
  try {
    await writeContactsFile(PATH_DB, []);
    console.log('Successfully cleared all contacts.');
  } catch (error) {
    console.error('Error clearing contacts:', error);
  }
};

// Usage example
const main = async () => {
  await removeAllContacts();
};

main();