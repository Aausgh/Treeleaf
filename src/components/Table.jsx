import React, { useEffect, useState } from 'react'

const Table = ({ tableData, handleDelete, handleEdit }) => {

      const [sortDirection, setSortDirection] = useState('asc');
      const [editingItemId, setEditingItemId] = useState(null);

      const handleSort = () => {
            setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
      };

      const sortedTableData = [...tableData].sort((a, b) => {
            const nameA = a.userName.toUpperCase();
            const nameB = b.userName.toUpperCase();

            return sortDirection === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      });


      const handleEditClick = (id) => {
            setEditingItemId(id);
      };

      const handleSaveEdit = (id, updatedData) => {
            // Call the handleEdit function from the parent component (Home)
            handleEdit(id, updatedData);
            // Reset editing state
            setEditingItemId(null);
      };

      const handleCancelEdit = () => {
            // Reset editing state
            setEditingItemId(null);
      };




      return (

            <table className='w-full m-auto shadow-xl rounded-xl table-auto'>
                  <thead>

                        <tr className='text-xl border-b bg-gray-100'>
                              <th className='py-3 px-6 flex cursor-pointer' onClick={handleSort}>
                                    Name {sortDirection === 'asc' ? ' ▲' : ' ▼'}
                              </th>
                              <th className='py-3 px-6'>Email</th>
                              <th className='py-3 px-6'>Phone Number</th>
                              <th className='py-3 px-6'>DOB</th>
                              <th colSpan='4' className='py-3 px-6'>Address</th>
                              <th className='py-3 px-6'>Action</th>
                        </tr>

                        <tr className='border-b'>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th className='py-3 px-6'>City</th>
                              <th className='py-3 px-6'>District</th>
                              <th className='py-3 px-6'>Province</th>
                              <th className='py-3 px-6'>Country</th>
                              <th></th>
                        </tr>
                  </thead>
                  <tbody>
                        {sortedTableData.map((data) => (
                              <tr key={data.id} className='text-lg border-b'>
                                    <td className='py-4 px-6 capitalize'>{editingItemId === data.id ? (
                                          <input
                                                type="text"
                                                value={data.userName}
                                                className=' input-table'
                                                onChange={(e) => handleEdit(data.id, { ...data, userName: e.target.value })}
                                          />
                                    ) : (
                                          data.userName
                                    )}
                                    </td>

                                    <td className='py-4 px-6'>{editingItemId === data.id ? (
                                          <input
                                                type="text"
                                                value={data.email}
                                                className=' input-table'
                                                onChange={(e) => handleEdit(data.id, { ...data, email: e.target.value })}
                                          />
                                    ) : (
                                          data.email
                                    )}
                                    </td>


                                    <td className='py-4 px-6'>{editingItemId === data.id ? (
                                          <input
                                                type="number"
                                                value={data.pNumber}
                                                className='input-table'
                                                onChange={(e) => handleEdit(data.id, { ...data, pNumber: e.target.value })}
                                          />
                                    ) : (
                                          data.pNumber
                                    )}
                                    </td>

                                    <td className='py-4 px-6'>{editingItemId === data.id ? (
                                          <input
                                                type="date"
                                                value={data.dob}
                                                className='input-table'
                                                onChange={(e) => handleEdit(data.id, { ...data, dob: e.target.value })}
                                          />
                                    ) : (
                                          data.dob
                                    )}
                                    </td>
                                    <td className='py-4 px-6 capitalize'>{editingItemId === data.id ? (
                                          <input
                                                type="text"
                                                value={data.address.city}
                                                className='input-table'
                                                onChange={(e) => handleEdit(data.id, { ...data, address: { ...data.address, city: e.target.value } })}
                                          />
                                    ) : (
                                          data.address.city
                                    )}
                                    </td>

                                    <td className='py-4 px-6 capitalize'>{editingItemId === data.id ? (
                                          <input
                                                type="text"
                                                value={data.address.district}
                                                className='input-table'
                                                onChange={(e) => handleEdit(data.id, { ...data, address: { ...data.address, district: e.target.value } })}
                                          />
                                    ) : (
                                          data.address.district
                                    )}
                                    </td>

                                    <td className='py-4 px-6'>{editingItemId === data.id ? (
                                          <select
                                                name="province"
                                                id="province"
                                                className='input-table'
                                                value={data.address.province}
                                                onChange={(e) => handleEdit(data.id, { ...data, address: { ...data.address, province: e.target.value } })}
                                          >
                                                <option value=''>Select Province</option>
                                                <option value='Koshi'> 1  (Koshi)</option>
                                                <option value='Madhesh'> 2  (Madhesh)</option>
                                                <option value='Bagmati'> 3  (Bagmati)</option>
                                                <option value='Gandaki'> 4  (Gandaki)</option>
                                                <option value='Lumbini'> 5  (Lumbini)</option>
                                                <option value='Karnali'> 6  (Karnali)</option>
                                                <option value='Sudurpashchim'> 7  (Sudurpashchim)</option>
                                          </select>

                                    ) : (
                                          data.address.province
                                    )}
                                    </td>

                                    <td className='py-4 px-6'>{editingItemId === data.id ? (
                                          <input
                                                type="text"
                                                value='Nepal'
                                                readOnly
                                                className='input-table'
                                                onChange={(e) => handleEdit(data.id, { ...data, country: e.target.value })}
                                          />
                                    ) : (
                                          data.address.country
                                    )}
                                    </td>

                                    <td className='flex justify-around gap-2 px-6 py-3'>
                                          {editingItemId === data.id ? (
                                                <>
                                                      <button
                                                            className='w-24 bg-green-600 text-white rounded-2xl'
                                                            onClick={() => handleSaveEdit(data.id, data)}
                                                      >
                                                            Save
                                                      </button>
                                                      <button
                                                            className='w-24 bg-gray-600 text-white rounded-2xl'
                                                            onClick={handleCancelEdit}
                                                      >
                                                            Cancel
                                                      </button>
                                                </>
                                          ) : (
                                                <>
                                                      <button
                                                            className='w-24 bg-blue-600 text-white rounded-2xl'
                                                            onClick={() => handleEditClick(data.id)}
                                                      >
                                                            Edit
                                                      </button>
                                                      <button
                                                            className='w-24 bg-red-600 text-white rounded-2xl'
                                                            onClick={() => handleDelete(data.id)}
                                                      >
                                                            Delete
                                                      </button>
                                                </>
                                          )}
                                    </td>
                              </tr>
                        ))}

                  </tbody>
            </table>

      )
}

export default Table