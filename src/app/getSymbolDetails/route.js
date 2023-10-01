import { getSymbolDetails } from '@/lib/fetch';

export async function POST(req) {
  const { symbol } = await req.json();
  const tmpData = await getSymbolDetails(symbol);
  const data = {
    bid: tmpData[0],
    ask: tmpData[2],
    last_price: tmpData[6],
    low: tmpData[9],
    high: tmpData[8],
    change: tmpData[4],
    change_percent: tmpData[5],
  };
  data.symbol = symbol;
  return Response.json({ data });
}
