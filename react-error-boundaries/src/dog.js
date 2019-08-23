import React from 'react'

const Dog = ({ animal }) => {
  if (animal === 'Cat'){
    throw new Error ('THIS IS A NOT DOG !!!')
  }

  return <div> { animal} </div>
}

export default Dog
