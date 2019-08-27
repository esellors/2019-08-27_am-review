import React from 'react'

export default function View(props) {

   const {entries} = props;

   const entriesMapped = entries.length > 0
      ? entries.map((entry, i) => {
         return (
            <div className='entry' key={i}>
               <h3>ID: {entry.id}</h3>
               <h3>Name:</h3>
               <p>{entry.name}</p>
               <h3>Phone:</h3>
               <p>{entry.phone}</p>
               <h3>Email:</h3>
               <p>{entry.email}</p>
            </div>
         )
      })
      : 'No entries to display'

   return (
      <div className='inner-container'>
         <h1>Listings:</h1>
         {entriesMapped}
      </div>
   )
}
