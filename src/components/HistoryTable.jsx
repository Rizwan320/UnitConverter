import TableHead from "./TableHead";

const HistoryTable = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 mt-12 border-t border-gray-300">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">History Table</h2>
          <p className="mt-1 text-sm text-gray-700">
            This is the list of recent data conversion
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <TableHead heading="Input Numerical Value" />
                    <TableHead heading="Input Unit of Measure" />
                    <TableHead heading="Target Unit of Measure" />
                    <TableHead heading="Student Response" />
                    <TableHead heading="Output" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4">84.2</td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900 ">Fahrenheit</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="text-sm text-gray-900 ">Rankine</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                      543.94
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="text-sm text-gray-900 ">Correct</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTable;
