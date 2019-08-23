import React from 'react'

const Dog = ({ animal }) => {
  if (animal !== 'cat'){
    throw new Error ('THIS IS A NOT DOG !!!')
  }

  return <div> { animal} </div>
}

export default Dog
