import { generatePassword } from "@/utils/password";

export const dynamic = "force-dynamic";

export const GET = async (req: Request) => {
	const { searchParams } = new URL(req.url);
	const password = generatePassword(searchParams);
	return new Response(password);
};
