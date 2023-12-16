import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

      const navigate = useNavigate();

      const [tableData, setTableData] = useState([]);

      useEffect(() => {
            const storedData = Object.keys(localStorage)
                  .filter(key => key.startsWith('formData_'))
                  .map(key => JSON.parse(localStorage.getItem(key)));

            setTableData(storedData);
      }, []);

      const handleDelete = (id) => {

            const updatedTableData = tableData.filter((data) => data.id !== id);
            setTableData(updatedTableData);


            const key = `formData_${id}`;
            localStorage.removeItem(key);
      };

      const handleEdit = (id, updatedData) => {

            const key = `formData_${id}`;
            localStorage.setItem(key, JSON.stringify(updatedData));

            const updatedTableData = tableData.map((data) => {
                  if (data.id === id) {
                        return {
                              ...data,
                              userName: updatedData.userName,
                              email: updatedData.email,
                              pNumber: updatedData.pNumber,
                              dob: updatedData.dob,
                              address: {
                                    ...data.address,
                                    city: updatedData.address.city,
                                    district: updatedData.address.district,
                                    province: updatedData.address.province,
                                    country: 'Nepal'
                              },
                        };
                  }
                  return data;
            });

            setTableData(updatedTableData);
      };


      return (
            <div className='w-full flex flex-col justify-center p-10'>

                  <h1 className='text-4xl text-center font-bold'>Profile</h1>

                  <div>
                        <button className='border border-black rounded-2xl text-xl w-52 h-10 bg-blue-600 text-white' onClick={() => navigate('/')}>
                              Home
                        </button>
                  </div>

                  <div className='w-full mt-10 m-auto'>
                        <Table
                              tableData={tableData}
                              handleDelete={handleDelete}
                              handleEdit={handleEdit}
                        />
                  </div>


            </div>
      )
}

export default Profile;