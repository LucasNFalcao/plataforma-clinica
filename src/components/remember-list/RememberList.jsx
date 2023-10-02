import { useState, useEffect } from 'react'
import RememberItem from '../remember-item/RememberItem'

import './rememberList.css'

const RememberList = () => {

  const [rememberList, setRememberList] = useState([])

  useEffect(() => {
      fetch('http://localhost:5000/lista_lembretes')
        .then((response) => response.json())
        .then((response) => setRememberList(response))
        .catch((error) => console.log(error))
  }, [])

  console.log('Remember list: ', rememberList)
  return (
    <div className={`accordion menu-container`} id="accordionRemember">
      {rememberList?.map((item, index) => {
        console.log("index: ", index)
        return <RememberItem
          key={(index + index) * 3}
          item={item}
          first={index === 0}
          numberItem = {(index * index + 2)}/>
      })}
    </div>
  )
}

export default RememberList
