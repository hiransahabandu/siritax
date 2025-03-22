import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Edit, Trash2 } from 'lucide-react';
import { useUser } from '../../../context/UserContext';
export const TaxRecords: React.FC = () => {
  const navigate = useNavigate();
  const {
    userRole
  } = useUser();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState<number | null>(null);
  const [records, setRecords] = useState([{
    id: 1,
    year: '2023',
    filingDate: '2023-04-15',
    status: 'Completed',
    refundAmount: '$1,240.00',
    type: 'Federal'
  }, {
    id: 2,
    year: '2023',
    filingDate: '2023-04-15',
    status: 'Completed',
    refundAmount: '$320.00',
    type: 'State'
  }, {
    id: 3,
    year: '2022',
    filingDate: '2022-04-12',
    status: 'Completed',
    refundAmount: '$980.00',
    type: 'Federal'
  }, {
    id: 4,
    year: '2022',
    filingDate: '2022-04-12',
    status: 'Completed',
    refundAmount: '$250.00',
    type: 'State'
  }]);
  const handleEditClick = () => {
    if (userRole === 'premium') {
      navigate('/tax-filing-wizard/details');
    } else {
      navigate('/tax-filing-wizard/upgrade');
    }
  };
  const handleDeleteClick = (recordId: number) => {
    if (userRole === 'premium') {
      setRecordToDelete(recordId);
      setShowDeleteConfirm(true);
    } else {
      navigate('/tax-filing-wizard/upgrade');
    }
  };
  const handleConfirmDelete = () => {
    if (recordToDelete) {
      setRecords(records.filter(record => record.id !== recordToDelete));
    }
    setShowDeleteConfirm(false);
    setRecordToDelete(null);
  };
  return <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Tax Filing Records
          </h1>
          {userRole === 'guest' && <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Guest View Mode
            </div>}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Filing Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Refund
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.map(record => <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {record.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.filingDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.refundAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Download className="h-4 w-4 inline" />
                    </button>
                    <button onClick={() => handleEditClick()} className="text-blue-600 hover:text-blue-900">
                      <Edit className="h-4 w-4 inline" />
                    </button>
                    <button onClick={() => handleDeleteClick(record.id)} className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4 inline" />
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        {userRole === 'guest' && <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="font-medium text-blue-800">
                Want to file or edit your taxes?
              </h3>
              <p className="text-blue-600 text-sm mt-1">
                Upgrade to Premium to unlock all features.
              </p>
            </div>
            <button onClick={() => navigate('/tax-filing-wizard/upgrade')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
              Upgrade Now
            </button>
          </div>}
        {showDeleteConfirm && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Confirm Deletion
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this tax record? This action
                cannot be undone.
              </p>
              <div className="flex justify-end space-x-4">
                <button onClick={() => setShowDeleteConfirm(false)} className="px-4 py-2 text-gray-600 hover:text-gray-800">
                  Cancel
                </button>
                <button onClick={handleConfirmDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};