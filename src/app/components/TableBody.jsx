import TableRow from './TableRow';

const TableBody = ({
  pairs,
  details,
  symbol,
  last,
  high,
  low,
  change,
  changePercent,
}) => {
  return (
    <tbody>
      {(pairs &&
        pairs.map((pair, index) => (
          <TableRow
            key={`${pair}${index}`}
            symbol={pair.toUpperCase()}
            href={`/details/${details[index].data.symbol}?last_price=${details[index].data.last_price}&high=${details[index].data.high}&low=${details[index].data.low}`}
            lastPrice={details[index].data.last_price}
            change={details[index].data.change}
            changePercent={details[index].data.change_percent}
            high={details[index].data.high}
            low={details[index].data.low}
          />
        ))) || (
        <tr>
          <td className='text-left'>{symbol}</td>
          <td className='text-right'>{last}</td>
          <td className='text-right'>{high}</td>
          <td className='text-right'>{low}</td>
          <td className='text-right'>{change}</td>
          <td className='text-right'>{changePercent}</td>
        </tr>
      )}
    </tbody>
  );
};
export default TableBody;
