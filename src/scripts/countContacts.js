import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  const fileContent = await fs.readFile(PATH_DB, 'utf8');
  const contacts = JSON.parse(fileContent);

  return contacts.length;
};

console.log(await countContacts());
