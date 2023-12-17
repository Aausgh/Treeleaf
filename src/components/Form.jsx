import React from 'react'

const Form = ({ handleChange, handleSubmit, formData, handleReset, handleNestedChange }) => {


      return (
            <form id='form' className='w-1/2 m-auto p-5 border border-blue-900 shadow-lg shadow-blue-900 mt-4 rounded-2xl' onSubmit={handleSubmit} >

                  <h1 className='text-3xl text-center font-bold mb-2'>Form</h1>
                  <hr className='border border-blue-900 mb-6' />

                  <div className='flex flex-col mb-4'>
                        <label htmlFor="userName" className='text-lg font-medium ml-1.5'>Name*</label>
                        <input
                              type="text"
                              name="userName"
                              id="userName"
                              className='input-form'
                              required
                              value={formData.userName}
                              onChange={handleChange}
                        />
                  </div>

                  <div className='flex flex-col mb-4'>
                        <label htmlFor="email" className='text-lg font-medium ml-1.5'>Email*</label>
                        <input
                              type="email"
                              name="email"
                              id="email"
                              className='input-form'
                              required
                              placeholder='name@example.com'
                              value={formData.email}
                              onChange={handleChange}
                        />
                  </div>

                  <div className='flex flex-col mb-4'>
                        <label htmlFor="number" className='text-lg font-medium ml-1.5'>Phone Number*</label>
                        <input
                              type="number"
                              name="pNumber"
                              id="pNumber"
                              className='input-form'
                              required
                              value={formData.pNumber}
                              onChange={handleChange}
                        />
                  </div>

                  <div className='flex flex-col mb-4'>
                        <label htmlFor="dob" className='text-lg font-medium ml-1.5'>Date of birth</label>
                        <input
                              type="date"
                              name="dob"
                              id="dob"
                              className='input-form'
                              value={formData.dob}
                              onChange={handleChange}
                        />
                  </div>

                  <div className=' flex flex-col'>

                        <div className='w-full flex gap-8'>

                              <div className='w-[45%] flex flex-col mb-4'>
                                    <label htmlFor="city" className='text-lg font-medium ml-1.5'>City</label>
                                    <input
                                          type="name"
                                          name="city"
                                          id="city"
                                          className='input-form'
                                          value={formData.address.city}
                                          onChange={handleNestedChange}
                                    />
                              </div>

                              <div className='w-[45%] flex flex-col mb-4'>
                                    <label htmlFor="district" className='text-lg font-medium ml-1.5'>District</label>
                                    <input
                                          type="name"
                                          name="district"
                                          id="district"
                                          className='input-form'
                                          value={formData.address.district}
                                          onChange={handleNestedChange}
                                    />
                              </div>
                        </div>

                        <div className='flex flex-col mb-4'>
                              <label htmlFor="city" className='text-lg font-medium ml-1.5'>Province</label>
                              <select
                                    name="province"
                                    id="province"
                                    className='input-form'
                                    value={formData.address.province}
                                    onChange={handleNestedChange}
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
                        </div>

                        <div className='flex flex-col mb-4'>
                              <label htmlFor="country" className='text-lg font-medium ml-1.5'>Country</label>
                              <input
                                    type="name"
                                    name="country"
                                    id="country"
                                    value='Nepal'
                                    onChange={handleChange}
                                    readOnly
                                    className='input-form' />
                        </div>

                  </div>


                  <div className='flex justify-around gap-2'>
                        <button
                              className='border rounded-2xl text-xl w-52 h-10 bg-blue-600 text-white'
                              type='submit'
                        >
                              Save
                        </button>

                        <button className='border rounded-2xl text-xl w-52 bg-red-600 text-white'
                              type='button'
                              onClick={handleReset}
                        >
                              Reset
                        </button>
                  </div>

            </form>

      )
}

export default Form;