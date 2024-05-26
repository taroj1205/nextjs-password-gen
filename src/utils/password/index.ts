export const generatePassword = (searchParams: URLSearchParams): string => {
	const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
	const upperCaseLetters = lowerCaseLetters.toUpperCase();
	const numbers = "0123456789";
	const symbols = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";

	const length = Number(searchParams.get("length")) || 16;
	const includeSymbols = searchParams.get("symbols") !== "false";
	const includeNumbers = searchParams.get("numbers") !== "false";
	const includeUpperCase = searchParams.get("upper") !== "false";
	const amount = Number(searchParams.get("amount")) || 1;

	let passwordCharacters = lowerCaseLetters;
	if (includeSymbols) passwordCharacters += symbols;
	if (includeNumbers) passwordCharacters += numbers;
	if (includeUpperCase) passwordCharacters += upperCaseLetters;

	const passwords = [];
	for (let j = 0; j < amount; j++) {
		let password = "";
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
			password += passwordCharacters[randomIndex];
		}
		passwords.push(password);
	}

	return passwords.join("\n");
};
