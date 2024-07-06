import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent);

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    const updatedContacts = contacts.slice(0, -1);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );

    console.log('Successfully removed the last contact.');
  } catch (error) {
    console.error('Error removing the last contact:', error);
  }
};

removeLastContact();