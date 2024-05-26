export const generatePassword = (searchParams: URLSearchParams): string => {
	const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
	const upperCaseLetters = lowerCaseLetters.toUpperCase();
	const numbers = "0123456789";
	const symbols = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";

	const length = Number(searchParams.get("length")) || 16;
	const includeSymbols = searchParams.get("symbols") !== "false";
	const includeNumbers = searchParams.get("numbers") !== "false";
	const includeUpperCase = searchParams.get("upper") !== "false";

	let passwordCharacters = lowerCaseLetters;
	if (includeSymbols) passwordCharacters += symbols;
	if (includeNumbers) passwordCharacters += numbers;
	if (includeUpperCase) passwordCharacters += upperCaseLetters;

	let password = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
		password += passwordCharacters[randomIndex];
	}

	return password;
};
