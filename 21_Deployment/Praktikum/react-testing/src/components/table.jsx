import { IoPencil, IoTrash } from "react-icons/io5";

export default function Table(props) {
  const {
    headers = [],
    datas = [],
    isReady,
    onEditClick,
    onDeleteClick,
  } = props;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {isReady &&
            datas.map((data) => (
              <tr key={data.id} className="hover:bg-gray-100">
                {Object.keys(data).map((key, index) => (
                  <td
                    key={index}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {data[key]}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex gap-3">
                    <IoPencil
                      className="text-blue-500 cursor-pointer"
                      onClick={onEditClick ? () => onEditClick(data) : null}
                    />
                    <IoTrash
                      className="text-red-500 cursor-pointer"
                      onClick={onDeleteClick ? () => onDeleteClick(data) : null}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}