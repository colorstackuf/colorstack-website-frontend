export type CarouselImage = {
	id: string;
	src: string;
	alt: string;
};

export type Size = {
	mediaUrl: string;
	height: number;
	width: number;
};

export type Sizes = {
	small: Size;
	medium: Size;
	large: Size;
	full: Size;
};

export type ColorPalette = {
	dominant: string;
	muted: string;
	mutedLight: string;
	mutedDark: string;
	vibrant: string;
	vibrantLight: string;
	vibrantDark: string;
};

export type Post = {
	id: string;
	timestamp: string;
	permalink: string;
	mediaType: string;
	mediaUrl: string;
	caption: string;
	sizes: Sizes;
	prunedCaption: string;
	hashtags: string[];
	mentions: string[];
	colorPalette: ColorPalette;
};

export interface ContactData {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}

export type InstagramData = {
	username: string;
	biography: string;
	profilePictureUrl: string;
	website: string;
	followersCount: number;
	followsCount: number;
	posts: Post[];
};

export const InstagramFallback: InstagramData = {
	username: 'colorstackuf',
	biography:
		'A supportive organization created to help Black, Indigenous & Latinx Computer Science students gain rewarding tech careers.\n@uflorida @colorstackorg',
	profilePictureUrl:
		'https://cdn2.behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/8102839759747949/profile.webp',
	website: 'https://linktr.ee/colorstackuf',
	followersCount: 496,
	followsCount: 317,
	posts: [
		{
			id: '18026973569312044',
			timestamp: '2024-05-03T22:03:55+0000',
			permalink: 'https://www.instagram.com/p/C6hbxP9xHrq/',
			mediaType: 'IMAGE',
			mediaUrl:
				'https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/441017410_961025935503067_7978699731672929260_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=ahyew2k6iDgQ7kNvgH1gYT0&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCmd385mZV2jUdzlrYlsPIWCJ2g5ebM9h3ugEx_e-kUbA&oe=66640B1D',
			sizes: {
				small: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18026973569312044/small.webp',
					height: 400,
					width: 400
				},
				medium: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18026973569312044/medium.webp',
					height: 700,
					width: 700
				},
				large: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18026973569312044/large.webp',
					height: 1000,
					width: 1000
				},
				full: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18026973569312044/full.webp',
					height: 1080,
					width: 1080
				}
			},
			caption:
				"Meet Aiden! He's a sophomore HSF scholar as well as an AI scholar which was presented to him at the Spring 2024 Undergraduate Symposium! He's recently completed an internship at Microsoft woohoo!\n\nFun fact about me: I'm half Bajan, half Puerto Rican!",
			prunedCaption:
				"Meet Aiden! He's a sophomore HSF scholar as well as an AI scholar which was presented to him at the Spring 2024 Undergraduate Symposium! He's recently completed an internship at Microsoft woohoo!\n\nFun fact about me: I'm half Bajan, half Puerto Rican!",
			hashtags: [],
			mentions: [],
			colorPalette: {
				dominant: '62,108,117',
				muted: '150,126,104',
				mutedLight: '152,199,206',
				mutedDark: '51,55,72',
				vibrant: '225,70,31',
				vibrantLight: '251,196,139',
				vibrantDark: '21,153,172'
			}
		},
		{
			id: '17894829407915639',
			timestamp: '2024-04-09T20:43:05+0000',
			permalink: 'https://www.instagram.com/p/C5jfcIVRZ72/',
			mediaType: 'IMAGE',
			mediaUrl:
				'https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/435746979_3274473369363289_8391425987136332332_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=Y77YOjIc-_YQ7kNvgEtQeKO&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDsajrCB2fXEVXnlc9lDc5zFqxszasBQ5-RdzpEXzDs_Q&oe=666412EE',
			sizes: {
				small: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17894829407915639/small.webp',
					height: 400,
					width: 400
				},
				medium: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17894829407915639/medium.webp',
					height: 700,
					width: 700
				},
				large: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17894829407915639/large.webp',
					height: 1000,
					width: 1000
				},
				full: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17894829407915639/full.webp',
					height: 1439,
					width: 1439
				}
			},
			caption:
				'SEO Career is the nation\u2019s premier program for recruiting and training high-achieving undergraduates, including Black, Hispanic/Latinx, and Native American students, for summer internships that lead to coveted, full-time jobs at partner companies\ud83c\udf08 Excited to dive into the world of opportunities with ColorStack at the SEO Career Event! Join us to learn about the endless possibilities at SEO Career and have one-on-one conversations with industry experts! \ud83d\ude80',
			prunedCaption:
				'SEO Career is the nation\u2019s premier program for recruiting and training high-achieving undergraduates, including Black, Hispanic/Latinx, and Native American students, for summer internships that lead to coveted, full-time jobs at partner companies\ud83c\udf08 Excited to dive into the world of opportunities with ColorStack at the SEO Career Event! Join us to learn about the endless possibilities at SEO Career and have one-on-one conversations with industry experts! \ud83d\ude80',
			hashtags: [],
			mentions: [],
			colorPalette: {
				dominant: '192,155,130',
				muted: '76,140,159',
				mutedLight: '132,180,192',
				mutedDark: '43,60,71',
				vibrant: '189,124,81',
				vibrantLight: '219,196,178',
				vibrantDark: '4,81,117'
			}
		},
		{
			id: '18024780974010263',
			timestamp: '2024-04-08T23:53:50+0000',
			permalink: 'https://www.instagram.com/p/C5hQeahRXsz/',
			mediaType: 'IMAGE',
			mediaUrl:
				'https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/435621033_1400588830583446_912234416783003937_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=zrdakchRSCUQ7kNvgFK8hYI&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAcCDXjIAqd5tNbznqo3LjzTAOySpLivEDz5woKmDLiPA&oe=6663F7A6',
			sizes: {
				small: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18024780974010263/small.webp',
					height: 400,
					width: 400
				},
				medium: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18024780974010263/medium.webp',
					height: 700,
					width: 700
				},
				large: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18024780974010263/large.webp',
					height: 1000,
					width: 1000
				},
				full: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18024780974010263/full.webp',
					height: 1200,
					width: 1200
				}
			},
			caption:
				'Finals stressing you out?\ud83d\ude16 Take a break from the now and look to the future with ColorStack and BNY Mellon! Join us with @bnymellon on Thursday, April 11th from 6pm to 8pm in the Reitz Union to learn how to create connections and build a community at your new job or internship! \ud83d\udcaa\n\nSee you there! \ud83e\udd17',
			prunedCaption:
				'Finals stressing you out?\ud83d\ude16 Take a break from the now and look to the future with ColorStack and BNY Mellon! Join us with @bnymellon on Thursday, April 11th from 6pm to 8pm in the Reitz Union to learn how to create connections and build a community at your new job or internship! \ud83d\udcaa\n\nSee you there! \ud83e\udd17',
			hashtags: [],
			mentions: ['bnymellon'],
			colorPalette: {
				dominant: '56,48,41',
				muted: '170,159,104',
				mutedLight: '143,184,197',
				mutedDark: '95,70,50',
				vibrant: '252,148,60',
				vibrantLight: '243,219,130',
				vibrantDark: '185,129,28'
			}
		},
		{
			id: '18002710133265757',
			timestamp: '2024-03-31T21:01:46+0000',
			permalink: 'https://www.instagram.com/p/C5MWbK4x-1e/',
			mediaType: 'IMAGE',
			mediaUrl:
				'https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/435012150_1404424890184867_8244539535520791787_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=tAeLfxALibsQ7kNvgGZ7LeG&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYC3LE7WnbyCHTeXemigI5ixA0hvhk5BcZMmrg2UGRU0Jw&oe=6664235A',
			sizes: {
				small: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18002710133265757/small.webp',
					height: 400,
					width: 400
				},
				medium: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18002710133265757/medium.webp',
					height: 700,
					width: 700
				},
				large: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18002710133265757/large.webp',
					height: 1000,
					width: 1000
				},
				full: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18002710133265757/full.webp',
					height: 1200,
					width: 1200
				}
			},
			caption:
				'\ud83d\udd0d\ud83e\udd16 Dive into the fascinating world of Artificial Intelligence with ColorStack, GATIOR (@uf_gaitor ) , and UF Data Science and Informatics Club (@uf_dsi )! \ud83c\udf08 Join us for an enlightening discussion on the history and evolution of AI through the ages. \ud83d\udcc8 Whether you\u2019re a seasoned enthusiast or just starting to explore the field, everyone is welcome to join in the conversation! \ud83d\ude80 Don\u2019t miss out on this exciting opportunity to connect, learn, and discover the amazing clubs at UF! See you there! \ud83d\udc4b',
			prunedCaption:
				'\ud83d\udd0d\ud83e\udd16 Dive into the fascinating world of Artificial Intelligence with ColorStack, GATIOR (@uf_gaitor ) , and UF Data Science and Informatics Club (@uf_dsi )! \ud83c\udf08 Join us for an enlightening discussion on the history and evolution of AI through the ages. \ud83d\udcc8 Whether you\u2019re a seasoned enthusiast or just starting to explore the field, everyone is welcome to join in the conversation! \ud83d\ude80 Don\u2019t miss out on this exciting opportunity to connect, learn, and discover the amazing clubs at UF! See you there! \ud83d\udc4b',
			hashtags: [],
			mentions: [],
			colorPalette: {
				dominant: '27,148,163',
				muted: '150,147,96',
				mutedLight: '184,210,215',
				mutedDark: '22,117,130',
				vibrant: '252,140,20',
				vibrantLight: '252,154,58',
				vibrantDark: '25,132,147'
			}
		},
		{
			id: '18046303534723083',
			timestamp: '2024-03-30T20:50:37+0000',
			permalink: 'https://www.instagram.com/p/C5JwWkzxdGb/',
			mediaType: 'IMAGE',
			mediaUrl:
				'https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/434996040_388343027343802_2146176930462106506_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=y5-9Ybu1HX0Q7kNvgGdARvq&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYC6aJ0gHCFnRsAlY9njKQjeYKD4O00JqIkq_-ByG44D_g&oe=66641677',
			sizes: {
				small: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18046303534723083/small.webp',
					height: 400,
					width: 400
				},
				medium: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18046303534723083/medium.webp',
					height: 700,
					width: 700
				},
				large: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18046303534723083/large.webp',
					height: 1000,
					width: 1000
				},
				full: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/18046303534723083/full.webp',
					height: 1200,
					width: 1200
				}
			},
			caption:
				'\ud83c\udf1f Exciting news! \ud83d\udcbc We are thrilled to announce our collaboration with NextEra Energy for an empowering workshop designed to elevate your career journey! Join us as we delve into crafting your unique brand, navigating mentorships, and unlocking your full potential. With a 20-minute immersive session and insights on distinguishing sponsors from mentors, it\u2019s an opportunity you don\u2019t want to miss! \ud83d\ude80\n\nNextEra Energy is a leading clean energy company focused on providing renewable energy solutions, including wind and solar power, to help build a sustainable future. They are known for their innovative approaches to energy production and commitment to environmental stewardship.',
			prunedCaption:
				'\ud83c\udf1f Exciting news! \ud83d\udcbc We are thrilled to announce our collaboration with NextEra Energy for an empowering workshop designed to elevate your career journey! Join us as we delve into crafting your unique brand, navigating mentorships, and unlocking your full potential. With a 20-minute immersive session and insights on distinguishing sponsors from mentors, it\u2019s an opportunity you don\u2019t want to miss! \ud83d\ude80\n\nNextEra Energy is a leading clean energy company focused on providing renewable energy solutions, including wind and solar power, to help build a sustainable future. They are known for their innovative approaches to energy production and commitment to environmental stewardship.',
			hashtags: [],
			mentions: [],
			colorPalette: {
				dominant: '231,117,67',
				muted: '84,158,136',
				mutedLight: '180,212,188',
				mutedDark: '92,95,51',
				vibrant: '245,190,31',
				vibrantLight: '238,215,126',
				vibrantDark: '4,155,172'
			}
		},
		{
			id: '17970905177572664',
			timestamp: '2024-03-27T20:19:09+0000',
			permalink: 'https://www.instagram.com/p/C5B-XhwxmeI/',
			mediaType: 'CAROUSEL_ALBUM',
			mediaUrl:
				'https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/434588157_1155504972291946_7742904278321785877_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=Iu8mETvz4HkQ7kNvgHdkk6g&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAAAQjiITVzkCbjWWVbg2tR9LYQYuaH_GQl3YtUhWPO2w&oe=666416A4',
			sizes: {
				small: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17970905177572664/small.webp',
					height: 400,
					width: 320
				},
				medium: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17970905177572664/medium.webp',
					height: 700,
					width: 560
				},
				large: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17970905177572664/large.webp',
					height: 1000,
					width: 801
				},
				full: {
					mediaUrl:
						'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17970905177572664/full.webp',
					height: 1349,
					width: 1080
				}
			},
			caption:
				"At ALL EVENTS this week a few lucky attendees will have a chance to win a Limited Edition \u201cWomen in Tech\u201d ColorStack Swag Box \ud83c\udf81\n\nEVENTS THIS WEEK:\n\n1\ufe0f\u20e3 Women's History Month: Educate, Empower & Engage\n\u23f0 When: Today 1-3PM\n\ud83d\udccd Where: Reitz Union, Level 2, CIME Fishbowl (Room 2201)\n\ud83c\udfa5 Zoom Option: https://ufl.zoom.us/j/97938683807\n\n2\ufe0f\u20e3 Capital One: New Partnership Kick-off Event\n\u23f0 When: Today 6-8PM\n\ud83d\udccd Where: CSE A101\n\n3\ufe0f\u20e3 CS Kickstart X ColorStack: Jeopardy Game Night\n\u23f0 When: Friday 6-8PM\n\ud83d\udccd Where: CSE A101\n\n\ud83d\udcc5 Subscribe to the Event Calendar to get live event updates: http://tinyurl.com/colorstackuf-calendar",
			prunedCaption:
				"At ALL EVENTS this week a few lucky attendees will have a chance to win a Limited Edition \u201cWomen in Tech\u201d ColorStack Swag Box \ud83c\udf81\n\nEVENTS THIS WEEK:\n\n1\ufe0f\u20e3 Women's History Month: Educate, Empower & Engage\n\u23f0 When: Today 1-3PM\n\ud83d\udccd Where: Reitz Union, Level 2, CIME Fishbowl (Room 2201)\n\ud83c\udfa5 Zoom Option: https://ufl.zoom.us/j/97938683807\n\n2\ufe0f\u20e3 Capital One: New Partnership Kick-off Event\n\u23f0 When: Today 6-8PM\n\ud83d\udccd Where: CSE A101\n\n3\ufe0f\u20e3 CS Kickstart X ColorStack: Jeopardy Game Night\n\u23f0 When: Friday 6-8PM\n\ud83d\udccd Where: CSE A101\n\n\ud83d\udcc5 Subscribe to the Event Calendar to get live event updates: http://tinyurl.com/colorstackuf-calendar",
			hashtags: [],
			mentions: [],
			colorPalette: {
				dominant: '30,30,30',
				muted: '153,106,117',
				mutedLight: '194,184,187',
				mutedDark: '95,51,61',
				vibrant: '13,149,241',
				vibrantLight: '216,164,180',
				vibrantDark: '7,78,126'
			},
			children: [
				{
					id: '17960040272618599',
					mediaType: 'IMAGE',
					mediaUrl:
						'https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/434588157_1155504972291946_7742904278321785877_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=Iu8mETvz4HkQ7kNvgHdkk6g&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAAAQjiITVzkCbjWWVbg2tR9LYQYuaH_GQl3YtUhWPO2w&oe=666416A4',
					sizes: {
						small: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17960040272618599/small.webp',
							height: 400,
							width: 320
						},
						medium: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17960040272618599/medium.webp',
							height: 700,
							width: 560
						},
						large: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17960040272618599/large.webp',
							height: 1000,
							width: 801
						},
						full: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17960040272618599/full.webp',
							height: 1349,
							width: 1080
						}
					},
					colorPalette: {
						dominant: '30,30,30',
						muted: '153,106,117',
						mutedLight: '194,184,187',
						mutedDark: '95,51,61',
						vibrant: '13,149,241',
						vibrantLight: '216,164,180',
						vibrantDark: '7,78,126'
					}
				},
				{
					id: '17844581070181692',
					mediaType: 'IMAGE',
					mediaUrl:
						'https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/434569137_957670749121769_3598759203629919800_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=QE1WRdpOgGMQ7kNvgGh09_s&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAAHxTK_PFWoPLGlkhoSipk9kneZ_DaaFYVIErgYFGXfQ&oe=666424C2',
					sizes: {
						small: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17844581070181692/small.webp',
							height: 400,
							width: 320
						},
						medium: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17844581070181692/medium.webp',
							height: 700,
							width: 560
						},
						large: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17844581070181692/large.webp',
							height: 1000,
							width: 800
						},
						full: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17844581070181692/full.webp',
							height: 1800,
							width: 1440
						}
					},
					colorPalette: {
						dominant: '214,209,198',
						muted: '143,88,106',
						mutedLight: '209,221,225',
						mutedDark: '83,43,56',
						vibrant: '251,158,63',
						vibrantLight: '239,210,134',
						vibrantDark: '4,84,132'
					}
				},
				{
					id: '17986772225488918',
					mediaType: 'IMAGE',
					mediaUrl:
						'https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/434580256_2178858759135358_1554831404744698816_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=XnByVgZJlx8Q7kNvgHoA739&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDMU3WT_YV4PLlyOkPGN74brxmnEEoKVOjxkSdjk1rZvA&oe=66641626',
					sizes: {
						small: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17986772225488918/small.webp',
							height: 400,
							width: 320
						},
						medium: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17986772225488918/medium.webp',
							height: 700,
							width: 560
						},
						large: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17986772225488918/large.webp',
							height: 1000,
							width: 800
						},
						full: {
							mediaUrl:
								'https://behold.pictures/qEwUupAQ0kVIYTpYal9dMunPOir2/driyRZEieOYErh2i3tFk/17986772225488918/full.webp',
							height: 1800,
							width: 1440
						}
					},
					colorPalette: {
						dominant: '238,82,117',
						muted: '69,134,157',
						mutedLight: '155,183,188',
						mutedDark: '70,91,128',
						vibrant: '242,69,115',
						vibrantLight: '251,206,86',
						vibrantDark: '12,76,132'
					}
				}
			]
		}
	]
};
