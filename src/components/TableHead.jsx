const TableHead = ({ heading }) => {
  return (
    <th
      scope="col"
      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
    >
      <span>{heading}</span>
    </th>
  );
};

export default TableHead;
