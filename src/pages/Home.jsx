import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import Table from '../components/Table';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Home = () => {

      const navigate = useNavigate();

      const [formData, setFormData] = useState({
            id: new Date().getTime(),
            userName: '',
            email: '',
            pNumber: '',
            dob: '',
            address: {
                  city: '',
                  district: '',
                  province: '',
                  country: 'Nepal',
            }
      });

      const [tableData, setTableData] = useState([]);

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            })
      };

      const handleNestedChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevFormData) => ({
                  ...prevFormData,
                  address: {
                        ...prevFormData.address,
                        [name]: value,
                  },
            }));
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                  e.preventDefault();
                  toast.error('Please enter a valid email address.');
                  return;
            }

            if (formData.pNumber.length < 7) {
                  e.preventDefault();
                  toast.error('Phone number must have at least 7 digits.');
                  return;
            }

            const key = `formData_${formData.id}`;
            localStorage.setItem(key, JSON.stringify(formData));

            toast.success("Data saved successfully");

            setFormData({
                  userName: '',
                  email: '',
                  pNumber: '',
                  dob: '',
                  address: {
                        city: '',
                        district: '',
                        province: '',
                        country: 'Nepal',
                  }
            });
      }

      const handleReset = () => {

            setFormData({
                  userName: '',
                  email: '',
                  pNumber: '',
                  dob: '',
                  address: {
                        city: '',
                        district: '',
                        province: '',
                  }
            });

            toast.success("Form reset successfull")
      };


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

            toast.success("Data deleted successfully");
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
                              },
                        };
                  }
                  return data;
            });

            setTableData(updatedTableData);

      };



      return (
            <>
                  <div className='w-full flex flex-col justify-center p-10'>
                        <div className='w-2/3 m-auto'>
                              <Form
                                    handleChange={handleChange}
                                    handleNestedChange={handleNestedChange}
                                    handleSubmit={handleSubmit}
                                    handleReset={handleReset}
                                    formData={formData}
                              />
                        </div>

                        <div className='w-full mt-12 m-auto'>
                              <Table
                                    tableData={tableData}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                              />
                        </div>

                        <div className='p-3 ml-auto'>
                              <button className='border rounded-2xl text-xl w-52 h-10 bg-blue-600 text-white' onClick={() => navigate('/profile')}>
                                    Profile
                              </button>
                        </div>
                  </div>
            </>
      )

}
export default Home;