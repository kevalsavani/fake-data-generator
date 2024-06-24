import { faker } from '@faker-js/faker';
import xlsx from "xlsx"

const createRandomUser = () => {

  const randomPick = Math.floor(Math.random() * (3+1))
  const mobilePrefixedArray = ['090','080','070','050']
  const prefixed = mobilePrefixedArray[randomPick] || '090'
  const mobileNumber = faker.helpers.fromRegExp('[1-9]{4}-[1-9]{4}');

  return {
    'Mobile Number': `${prefixed}-${mobileNumber}`,
    'Contact Name': faker.person.fullName(),
    'Email': faker.internet.email(),
  };
}

const USERS = faker.helpers.multiple(createRandomUser, { count: 50000 });

// Write the workbook to a file
const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.json_to_sheet(USERS);
xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
xlsx.writeFile(workbook, './output/contacts.xlsx');
