import './bookingPage.css'

import CalendarHospital from '../../components/calendar/CalendarHospital'
import ListOfPeople from '../../components/list-of-people/ListOfPeople'
import TimetableList from '../../components/timetable-list/TimetableList'

const BookingPage = () => {

  return (
    <div className={`d-flex p-3 booking-container column-gap-2`}>
      <div className={`d-flex flex-column col-6 row-gap-3`}>
        <ListOfPeople isDoctor />
        <CalendarHospital />
      </div>
      <div className={`col-6`}>
        <TimetableList />
      </div>
    </div>
  )
}

export default BookingPage
