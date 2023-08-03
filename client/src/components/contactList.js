import React from 'react'
import AddContact from './AddContact'

const contactList = ({contacts}) => {
   console.log(contacts)
  return (
    <div>
      {
        contacts.map((el) => <AddContact contact={el}/> )
      }
    </div>
  )
}

export default contactList
