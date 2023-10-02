import { useState } from 'react'

import './workingAreaPage.css'

import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchBar from '../../components/search-bar/SearchBar'
import CalendarHospital from '../../components/calendar/CalendarHospital'
import ListOfPeople from '../../components/list-of-people/ListOfPeople'
import Historico from '../../components/attendance-history/AttendanceHistory'
import RememberList from '../../components/remember-list/RememberList'

const WorkingAreaPage = () => {
  const [catchInformation, setCatchInformation] = useState('')

  return (
    <div className={`container-working-area`}>
      <Header nameClass={`item-header`} />
      <Navbar nameClass={`item-navbar`} />
      <div className={`d-flex mx-3 item-page`}>
        <section className={`col-6 p-2 row-gap-3 section-lateral`}>
          <SearchBar handleSearchWord={setCatchInformation} />
          <RememberList />
          <Historico />
        </section>
        <section className={`col-6 p-2 row-gap-3 section-lateral`}>
          <CalendarHospital />
          <ListOfPeople isHospitalPatient />
        </section>
      </div>
    </div>
  )
}

export default WorkingAreaPage
