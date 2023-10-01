import { getSymbols } from '@/lib/fetch';

export async function GET() {
  const data = await getSymbols();
  return Response.json({ data });
}
