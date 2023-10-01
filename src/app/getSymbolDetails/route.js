import { getSymbolDetails } from '@/lib/fetch';

export async function POST(req) {
  const { symbol } = await req.json();
  const data = await getSymbolDetails(symbol);
  data.symbol = symbol;
  return Response.json({ data });
}
