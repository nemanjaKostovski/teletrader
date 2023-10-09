const TableHeader = ({ name, last, change, changePercent, high, low }) => {
  return (
    <thead>
      <tr>
        {name && <th className='text-left'>Name</th>}
        {last && <th className='text-right'>Last price</th>}
        {change && <th className='text-right'>Change</th>}
        {changePercent && <th className='text-right'>Change Percent</th>}
        {high && <th className='text-right'>High</th>}
        {low && <th className='text-right'>Low</th>}
      </tr>
    </thead>
  );
};
export default TableHeader;
