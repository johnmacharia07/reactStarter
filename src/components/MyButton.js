import React from 'react'

const MyButton = ({title, color}) => {
  return (
    <button style={{backgroundColor:color}}>
        {title}
    </button>
  )
}

export default MyButton