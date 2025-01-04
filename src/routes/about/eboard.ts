import type { ContactData, ContactErrors } from '$lib/types';
import { validEmail } from '$lib/utils';

export function validateForm(contactData: ContactData, contactErrors: ContactErrors) {
	let valid = true;
	if (!contactData.firstName) {
		valid = false;
		contactErrors.firstName = 'First name is required';
	} else {
		contactErrors.firstName = '';
	}

	if (!validEmail(contactData.email)) {
		valid = false;
		contactErrors.email = 'Invalid email';
	} else {
		contactErrors.email = '';
	}

	if (contactData.message.trim() === '') {
		valid = false;
		contactErrors.message = 'Message is required';
	} else {
		contactErrors.message = '';
	}

	return valid;
};

export async function submitForm(contactData: ContactData, contactErrors: ContactErrors) {
	if (!validateForm(contactData, contactErrors)) {
		return;
	}

	const response = await fetch('/api/email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(contactData)
	});

	if (response.ok) {
		alert('Email sent successfully');
	} else {
		response
			.json()
			.then((data) => {
				alert(data.message);
			})
			.catch(() => {
				alert('An error occurred');
			});
	}
}

export const members = [
	{
		name: 'Mya Ramsey',
		position: 'President',
		image: 'e-board/Mya_Ramsey.jpeg',
		linkedin: 'https://www.linkedin.com/in/mya-ramsey-uf/'
	},
	{
		name: 'Yakub Mungai',
		position: 'Vice Presdient',
		image: 'e-board/Yakub_Mungai.jpeg',
		linkedin: 'https://www.linkedin.com/in/yakubjmungai/'
	},
	{
		name: 'Kacie Ross',
		position: 'VP of Marketing',
		image: 'e-board/Kacie_Ross.jpeg',
		linkedin: 'https://www.linkedin.com/in/kacierossuf/'
	},
	{
		name: 'Natahja Graddy',
		position: 'VP of Events',
		image: 'e-board/Natahja_Graddy.jpeg',
		linkedin: 'https://www.linkedin.com/in/natahja-graddy/'
	},
	{
		name: 'Matthew DeGuzman',
		position: 'Technical Events Coordinator',
		image: 'e-board/Matthew_DeGuzman.jpeg',
		linkedin: 'https://www.linkedin.com/in/matthew-deguzman/'
	},
	{
		name: 'Robert Conde',
		position: 'Technical Events Coordinator',
		image: 'e-board/Robert_Conde.jpeg',
		linkedin: 'https://www.linkedin.com/in/rcond/'
	},
	{
		name: 'Soraya Sardine',
		position: 'Graphic Design Coordinator',
		image: 'e-board/Soraya_Sardine.jpeg',
		linkedin: 'https://www.linkedin.com/in/soraya-sardine-64662216a/'
	},
	{
		name: 'Brian Mbaji',
		position: 'Treasurer',
		image: 'e-board/Brian_Mbaji.jpeg',
		linkedin: 'https://www.linkedin.com/in/brian-mbaji/'
	},
	{
		name: 'Yohance de Souza',
		position: 'Administration Chair',
		image: 'e-board/Yohance_de_Souza.jpeg',
		linkedin: 'https://www.linkedin.com/in/yohance-de-souza-217a291b5/'
	},
	{
		name: 'Yonas Worku',
		position: 'Career Events Coordinator',
		image: 'e-board/Yonas_Worku.jpeg',
		linkedin: 'https://www.linkedin.com/in/yonasworku/'
	},
	{
		name: 'Alex Huper',
		position: 'Academic Programs Coordinator',
		image: 'e-board/Alex_Huper.jpeg',
		linkedin: 'https://www.linkedin.com/in/alex-huper/'
	},
	{
		name: 'Josue Vicente',
		position: 'Academic Events Coordinator',
		image: 'e-board/Josue_Vicente.jpeg',
		linkedin: 'https://www.linkedin.com/in/josue-e-vicente/'
	},
	{
		name: 'Abigail Erefah',
		position: 'Digital Marketing Coordinator',
		image: 'e-board/Abigail_Erefah.jpeg',
		linkedin: 'https://www.linkedin.com/in/abigail-erefah/'
	},
	{
		name: 'Marvens Dor',
		position: 'Social Media Coordinator',
		image: 'e-board/Marvens_Dor.jpeg',
		linkedin: 'https://www.linkedin.com/in/marvensjd/'
	},
	{
		name: 'Pablo Bueno',
		position: 'Outreach Coordinator',
		image: 'e-board/Pablo_Bueno.jpeg',
		linkedin: 'https://www.linkedin.com/in/pablojbueno/'
	},
	{
		name: 'Braulio Quintana',
		position: 'Physical Marketing Coordinator',
		image: 'e-board/Braulio_Quintana.jpeg',
		linkedin: 'https://www.linkedin.com/in/braulioquintana/'
	},
	{
		name: 'Xalan Dames',
		position: 'Community Events Coordinator',
		image: 'e-board/Xalan_Dames.jpeg',
		linkedin: 'https://www.linkedin.com/in/xalandamesuf/'
	},
	{
		name: 'Dr. Sanethia Thomas',
		position: 'Faculty Advisor',
		image: 'e-board/Sanethia_Thomas.jpeg',
		linkedin: 'https://www.linkedin.com/in/sanethia-thomas-phd-112806/'
	},
	{
		name: 'Carson Johnson',
		position: 'Founding President',
		image: 'e-board/Carson_Johnson.jpeg',
		linkedin: 'https://www.linkedin.com/in/carson74johnson/'
	}
];

