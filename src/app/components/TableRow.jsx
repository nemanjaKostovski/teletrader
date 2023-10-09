import Link from 'next/link';

const TableRow = ({
  href,
  symbol,
  lastPrice,
  change,
  changePercent,
  high,
  low,
}) => {
  return (
    <tr>
      <td className='text-left'>
        <Link
          href={href}
          className='text-blue-500 hover:text-blue-600 active:text-blue-700'
        >
          {symbol}
        </Link>
      </td>
      <td className='text-right'>{lastPrice}</td>
      <td className='text-right'>{change}</td>
      <td className='text-right'>{changePercent}</td>
      <td className='text-right'>{high}</td>
      <td className='text-right'>{low}</td>
    </tr>
  );
};
export default TableRow;
