import './bookingPage.css'

import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import CalendarHospital from '../../components/calendar/CalendarHospital'
import ListOfPeople from '../../components/list-of-people/ListOfPeople'
import TimetableList from '../../components/timetable-list/TimetableList'

const BookingPage = () => {

  return (
    <div className={`booking-container`}>
      <Header nameClass={`item-header`} />
      <Navbar nameClass={`item-navbar`} />
      <div className={`d-flex p-3 column-gap-2 item-page`}>
        <div className={`d-flex flex-column col-6 row-gap-3`}>
          <ListOfPeople isDoctor />
          <CalendarHospital />
        </div>
        <div className={`col-6`}>
          <TimetableList />
        </div>
      </div>
    </div>
  )
}

export default BookingPage
