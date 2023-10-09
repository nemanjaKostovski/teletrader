import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({
  headerName,
  headerLast,
  headerChange,
  headerChangePercent,
  headerHigh,
  headerLow,
  href,
  last,
  change,
  changePercent,
  high,
  low,
  symbol,
  symbols,
  details,
}) => {
  return (
    <table className='w-1/2 mt-8 ml-4 shadow-md table-auto border-separate p-4'>
      <TableHeader
        name={headerName}
        last={headerLast}
        change={headerChange}
        changePercent={headerChangePercent}
        high={headerHigh}
        low={headerLow}
      />
      <TableBody
        href={href}
        last={last}
        change={change}
        changePercent={changePercent}
        high={high}
        low={low}
        pairs={symbols}
        details={details}
        symbol={symbol}
      />
    </table>
  );
};
export default Table;
