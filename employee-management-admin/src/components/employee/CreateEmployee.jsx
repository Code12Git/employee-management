import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../../redux/action/employeeAction';
import toast from 'react-hot-toast';
import { validateEmployeeData } from '../../validations/employeeValidation';
const CreateEmployee = () => {
    const dispatch = useDispatch();
    const [employeeData, setEmployeeData] = useState({
        name: '',
        username: '',
        email: '',
        department: '',
        password: '',
        position: '',
        phone: ''
    });

    const [error, setError] = useState('');

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');

        const validationErrors = validateEmployeeData(employeeData);
        if (Object.keys(validationErrors).length > 0) {
            setError(Object.values(validationErrors).join(' '));
            return;
        }

        try {
            await dispatch(createEmployee(employeeData));
            toast.success('Employee created successfully!');
            setEmployeeData({
                name: '',
                username: '',
                email: '',
                department: '',
                password: '  ',
                position: '',
                phone: ''
            });
        } catch (err) {
            setError('Failed to create employee. Please try again.');
            toast.error('Failed to create employee.');
            console.error('Error creating employee:', err);
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <form className="w-full max-w-lg p-8 bg-white mt-12 shadow-md rounded" onSubmit={submitHandler}>
                <h2 className="text-2xl font-bold text-center mb-6">Create Employee</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={employeeData.name}
                        onChange={inputChangeHandler}
                        className="w-full mt-2 p-3 border rounded"
                        placeholder="Enter employee's name"
                        required
                    />
                    {error && error.name && <p className="text-red-500">{error.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={employeeData.username}
                        onChange={inputChangeHandler}
                        className="w-full mt-2 p-3 border rounded"
                        placeholder="Enter username"
                        required
                    />
                    {error && error.username && <p className="text-red-500">{error.username}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={employeeData.email}
                        onChange={inputChangeHandler}
                        className="w-full mt-2 p-3 border rounded"
                        placeholder="Enter email"
                        required
                    />
                    {error && error.email && <p className="text-red-500">{error.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="email">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={employeeData.password}
                        onChange={inputChangeHandler}
                        className="w-full mt-2 p-3 border rounded"
                        placeholder="Enter password"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="department">Department</label>
                    <select
                        id="department"
                        name="department"
                        value={employeeData.department}
                        onChange={inputChangeHandler}
                        className="w-full mt-2 p-3 border rounded"
                        required
                    >
                        <option value="" disabled>Select department</option>
                        <option value="hr">HR</option>
                        <option value="engineering">Engineering</option>
                        <option value="sales">Sales</option>
                        <option value="marketing">Marketing</option>
                        <option value="finance">Finance</option>
                        <option value="hiring">Hiring</option>
                    </select>
                    {error && error.department && <p className="text-red-500">{error.department}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="position">Position</label>
                    <select
                        id="position"
                        name="position"
                        value={employeeData.position}
                        onChange={inputChangeHandler}
                        className="w-full mt-2 p-3 border rounded"
                        required
                    >
                        <option value="" disabled>Select position</option>
                        <option value="manager">Manager</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="analyst">Analyst</option>
                        <option value="intern">Intern</option>
                        <option value="sales executive">Sales Executive</option>
                        <option value="hr">HR</option>
                    </select>
                    {error && error.position && <p className="text-red-500">{error.position}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={employeeData.phone}
                        onChange={inputChangeHandler}
                        className="w-full mt-2 p-3 border rounded"
                        placeholder="Enter phone number"
                        required
                    />
                    {error && error.phone && <p className="text-red-500">{error.phone}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
                >
                    Create Employee
                </button>
            </form>
        </div>
    );
};

export default CreateEmployee;
