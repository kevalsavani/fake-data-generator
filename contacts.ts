// npx ts-node contacts.ts
import { faker } from '@faker-js/faker';
import xlsx from "xlsx"
import { randomNumber } from './helper';

let country = 'N_A';

const createRandomUser = () => {

	// !Japan
	// Sample - +81 (9022) 579 263
	// const countryCode = '81';
	// country = 'Japan'
	// let randomPick = randomNumber(0, 3)
	// const mobilePrefixedArray = ['50', '70', '80', '90' ]
	// const prefixed = mobilePrefixedArray[randomPick] || '90'
	// const mobileNumber = faker.helpers.fromRegExp('[1-9]{4}-[1-9]{4}');

	// !United Kingdom
	// const countryCode = '44';
	// // Sample - +44 (78) 774 363 3
	// country = 'UK'
	// let randomPick = randomNumber(0, 0)
	// const mobilePrefixedArray = ['7']
	// const prefixed = mobilePrefixedArray[0] || '7'
	// const mobileNumber = faker.helpers.fromRegExp('[4-9]{4}-[1-9]{5}');

	// !India
	// Sample - +91 (75) 054 49509
	const countryCode = '91';
	let randomPick = randomNumber(0, 5)
	country = 'India'
	const mobilePrefixedArray = ['4', '5', '6', '7', '8', '9']
	const prefixed = mobilePrefixedArray[randomPick] || '9'
	const mobileNumber = faker.helpers.fromRegExp('[4-9]{2}-[1-9]{4}-[1-9]{3}');

	// 916-48-3414-365

	// !USA
	// Sample - +1 (303) 453 4545
	// const countryCode = '1';
	// country = 'USA'
	// let randomPick = randomNumber(0, 8)
	// const mobilePrefixedArray = ['253', '302', '501', '570', '607', '612', '740', '752', '815']
	// const prefixed = mobilePrefixedArray[randomPick] || '501'
	// const mobileNumber = faker.helpers.fromRegExp('[4-9]{3}-[1-9]{4}');

	// Contact name
	randomPick = randomNumber(0, 300)
	const contactName = (randomPick % 5 == 0 || randomPick % 4 == 0 || randomPick % 3 == 0) ? faker.person.fullName() : ''
	randomPick = randomNumber(0, 100)
	const email = randomPick % 4 == 0 ? faker.internet.email() : ''

	return {
		'Mobile Number': `${countryCode}${prefixed}-${mobileNumber}`,
		'Contact Name': contactName,
		'Email': email,
	};
}

const generateData = () => {

	for (let index = 1; index <= 1; index++) {
		// const count = randomNumber(200, 700);
		// const count = randomNumber(750, 1200);
		const count = randomNumber(1350, 2200);
		const USERS = faker.helpers.multiple(createRandomUser, { count });

		const filePath = `./output/contacts_${country}_${count}_${index}.xlsx`

		// Write the workbook to a file
		const workbook = xlsx.utils.book_new();
		const worksheet = xlsx.utils.json_to_sheet(USERS);
		xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
		xlsx.writeFile(workbook, filePath);

		console.log('Data generated', filePath);
	}


}

generateData()
