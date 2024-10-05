import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteEmployee, fetchEmployee } from '../../redux/action/employeeAction';
import EmployeeUpdate from '../../ui/Modal/employee/EmployeeUpdate';

export default function EmployeeAction() {
    const dispatch = useDispatch();
    const { employees, error, loading } = useSelector((state) => state.employeeData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(fetchEmployee());
    }, [dispatch]);

    const headers = employees.length > 0 ? Object.keys(employees[1]) : [];
    const mandatoryHeaders = headers.filter((item) => item !== "__v" && item !== 'password' && item !== 'updatedAt');
    const handleDelete = (id) => {
        dispatch(deleteEmployee(id));
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <>
            <TableContainer component={Paper} className="shadow-lg rounded-lg p-4">
                {error && <p className="text-red-500 text-center">{error}</p>}
                {loading && (
                    <div className="flex justify-center items-center h-32">
                        <CircularProgress />
                    </div>
                )}

                <Table className='mt-4' sx={{ minWidth: 700 }} aria-label="employee table">
                    <TableHead>
                        <TableRow className="bg-blue-300">
                            {mandatoryHeaders.map((header, index) => (
                                <TableCell key={index} align="center" className="font-bold text-gray-800">
                                    {header.toUpperCase()}
                                </TableCell>
                            ))}
                            <TableCell align="center" className="font-bold text-gray-800">
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {employees.length > 0 ? (
                            employees
                                .filter(row => row.role !== 'admin')  // Filter out admins
                                .map((row) => (
                                    <TableRow
                                        key={row._id}
                                        hover
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        className="hover:bg-gray-200 transition-all duration-200"
                                    >
                                        {mandatoryHeaders.map((header, index) => (
                                            <TableCell key={index} align="center" className="text-gray-700">
                                                {header === 'createdAt' ? (
                                                    new Date(row[header]).toLocaleDateString()  // Convert createdAt to a readable date
                                                ) : (
                                                    row[header]  // Render other fields as is
                                                )}
                                            </TableCell>
                                        ))}
                                        <TableCell align="center">
                                            <div className="flex justify-center space-x-2">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => handleEdit(row)}
                                                    className="transition-transform delay-150 hover:scale-110"
                                                >
                                                    Update
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="error"
                                                    onClick={() => handleDelete(row._id)}
                                                    className="transition-transform delay-150 hover:scale-110"
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={mandatoryHeaders.length + 1} align="center">
                                    <p className="text-gray-500">No employees found.</p>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>

                </Table>
                {isModalOpen && selectedUser && (
                    <EmployeeUpdate user={selectedUser} closeModal={closeModal} />
                )}
            </TableContainer>
        </>
    );
}
