import { Fragment } from 'react';
import FetchAttendance from '../components/Attendance/FetchAttendance';
import AttendanceMarking from '../components/Attendance/AttendanceMarking';

const Attendance = () => {

    return (
        <Fragment>
            <AttendanceMarking />
            <FetchAttendance />
        </Fragment>
    );
};

export default Attendance;
