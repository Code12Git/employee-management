import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayroll } from "../../redux/actions/payrollAction";

const FetchPayroll = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userData);
    const { payroll, loading, error } = useSelector(state => state.payrollData);

    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchPayroll(user._id));
        };
        fetchData();
    }, [dispatch, user._id]);

    if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;
    if (error) return <p className="text-center text-lg font-semibold text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto my-8 p-4 shadow-lg rounded-lg bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Payroll Records</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 border-b text-left">Month</th>
                        <th className="py-3 px-4 border-b text-left">Salary</th>
                        <th className="py-3 px-4 border-b text-left">Bonuses</th>
                        <th className="py-3 px-4 border-b text-left">Deductions</th>
                        <th className="py-3 px-4 border-b text-left">Final Salary</th>
                        <th className="py-3 px-4 border-b text-left">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {payroll && payroll.length > 0 ? (
                        payroll.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-4 border-b">{item.month}</td>
                                <td className="py-3 px-4 border-b">{item.salary.toLocaleString()}</td>
                                <td className="py-3 px-4 border-b">{item.bonuses.toLocaleString()}</td>
                                <td className="py-3 px-4 border-b">{item.deductions.toLocaleString()}</td>
                                <td className="py-3 px-4 border-b">{item.finalSalary.toLocaleString()}</td>
                                <td className="py-3 px-4 border-b">{new Date(item.createdAt).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="py-3 px-4 text-center text-gray-500">No payroll records found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FetchPayroll;
