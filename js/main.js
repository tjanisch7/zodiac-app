var horoscope = [
	{
		sign: "aries",
		text: "As the first sign in the zodiac, the presence of Aries almost always marks the beginning of something energetic and turbulent.They are continuously looking for dynamic, speed and competition. They are always first in everything - from work to social gatherings. Thanks to its ruling planet Mars, Aries is one of the most active zodiac signs. People born under the Aries sign, are meant to emphasize the search for answers to personal and metaphysical questions. This is the biggest feature of this incarnation.",
		image: "<img src= http://cdn.astrology-zodiac-signs.com/images/aries.jpg>"
	},
	{
		sign: "aquarius",
		text: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems. Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.",
		image: "<img src= http://www.freshdesignpedia.com/wp-content/uploads/horoscope-aquarius-so-are-the-stars-in-the-autumn-2015/horoscope-aquarius-zodiac-sign-symbol-autumn-horoscope.jpg>"
	},
	{
		sign: "cancer",
		text: "Deeply intuitive and sentimental, Cancer can be one of the most challenging Zodiac signs to get to know. Cancer is very emotional and sensitive, and they care about family and home. Cancer is sympathetic and is very attached to the people who surround him. People born under the Cancer sign are very loyal and empathetic people, able to empathize with your pain and suffering.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/cancer.jpg>"
	},
	{
		sign: "gemini",
		text: "Expressive and quick-witted, Gemini represents two different sides of personality and you will never be sure with whom you will face. Gemini can be sociable,communicative and ready for fun, while on the other hand it can be very serious, thoughtful, restless and even indecisive. As an air sign, Gemini is concerned with all aspects of the mind. This zodiac sign is ruled by Mercury, which is a planet that represents communication, writing and teaching others. They get fascinated by almost everything in the world and they have a feeling as if there is not enough time to experience everything they want to see. This makes them excellent artists, writers and journalists.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/gemini.jpg>"
	},
	{
		sign: "leo",
		text: "People born under the sign of Leo are natural born leaders. They are dramatic, creative self-confident, dominant and extremely difficult to resist. They can achieve anything they want, whether it's about work or time spent will family and friends. Leo is a fire sign, which means that he loves life and expects to have a good time. Like other fire signs, Sagittarius and Aries, Leo is also able to use his mind to solve even the most difficult problems and take the initiative in solving various complicated situations.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/leo.jpg>"
	},
	{
		sign: "libra",
		text: "People born under the sign of Libra are peaceful and fair, and they hate being alone. Partnership is very important for Libra -born, and with their victorious mentality and cooperation, they cannot stand to be alone. The Libra is an Air sign, with expressed intellect and a keen mind. They can be inspired by good books, insurmountable discussions and interesting people.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/libra.jpg>"
	},
	{
		sign: "pisces",
		text: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/pisces.jpg>"
	},
	{
		sign: "capricorn",
		text: "When it comes to professionalism and traditional values, Capricorn is the first. Capricorn is practical and is considered to be the most serious sign of the zodiac, who possess an independence that enables significant progress both on the personal level and in business. As an Earth sign, for a Capricorn there is nothing more important in life than family. Capricorn is a master of self-control and has the potential to be a great leader or manager as long as it is in the sphere of business.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/capricorn.jpg>"
	},
	{
		sign: "sagittarius",
		text: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals. Like the other fire signs, Sagittarius needs to be constantly in touch with the world to experience as much as possible.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/sagittarius.jpg>"
	},
	{
		sign: "scorpio",
		text: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/scorpio.jpg>"
	},
	{
		sign: "taurus",
		text: "Powerful and reliable, Taurus is the first when it comes to harvesting the fruits of his labor. They love everything that is good and beautiful, and they are often surrounded by material pleasures. People born under the Taurus sign are very sensual and tactile. Touch is extremely important for them, both in business and in romance. Stable and conservative, Taurus is among the most reliable signs of the zodiac. Stubbornness is a trait that is forcing him to expel things to the end, in order to comply with the standards.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/taurus.jpg>"
	},
	{
		sign: "virgo",
		text: "Virgos are always paying attention to smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance. Virgos are often tender but also very careful. Virgo is an Earth sign, which prefers conservative and organized things, and those dependent on them. People born under the Virgo sign have very organized life, and even if they are very messy, their goals and dreams are put on strictly defined points in their mind.",
		image: "<img src=http://cdn.astrology-zodiac-signs.com/images/virgo.jpg>"
	}
]

function getSign() {
	// grab what the user types into the input form
	var sign = document.getElementById('sign').value.toLowerCase();
	document.getElementById('two').innerHTML = " ";
	checkSign(sign)
}
// checks that the user entered to see if it matches one of the signs in the array of horoscopes
function checkSign(sign) {
	for (var i = 0; i < horoscope.length; i++) {
		// if it does match, print this to screen
		if (sign == horoscope[i].sign) {
			document.getElementById('one').innerHTML = horoscope[i].image;
			var message = horoscope[i].text; 
			document.getElementById('two').innerHTML = message;
			return
		} 
	}
		document.getElementById('one').innerHTML = "<h1>Invalid Submission, try again!</h1>"

}









