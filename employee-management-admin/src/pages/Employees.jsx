import CreateEmployee from '../components/employee/CreateEmployee';
import EmployeeAction from '../components/employee/EmployeeAction';

export default function Employees() {
    return (
        <div className='flex flex-col gap-5 bg-gray-100'>
            <CreateEmployee />
            <EmployeeAction />
        </div>
    );
}
