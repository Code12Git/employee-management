

const AttendanceMarking = () => {
    // const dispatch = useDispatch();
    // const { user } = useSelector(state => state.userData); // Assuming user data is in the store
    // const [status, setStatus] = useState(''); // State to store attendance status
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [success, setSuccess] = useState(null);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setError(null);
    //     setSuccess(null);

    //     try {
    //         await dispatch(markAttendance(user._id, { status })); // Assuming you have a markAttendance action
    //         setSuccess("Attendance marked successfully!");
    //     } catch (err) {
    //         setError(err.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Mark Your Attendance</h2>
            <form className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                        Attendance Status
                    </label>
                    <select
                        id="status"
                        value={status}
                        // onChange={(e) => setStatus(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Status</option>
                        <option value="present">Present</option>
                        <option value="absent">Absent</option>
                        <option value="late">Late</option>
                    </select>
                </div>
                {/* <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {loading ? 'Marking...' : 'Mark Attendance'}
                </button>
                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                {success && <p className="text-green-500 text-sm mt-2 text-center">{success}</p>} */}
            </form>
        </div>
    );
};

export default AttendanceMarking;
