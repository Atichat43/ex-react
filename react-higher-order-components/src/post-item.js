import React from 'react'

const PostItem = ({ contact }) => (
  <div>
    <p>{contact.name}</p>
    <p>{contact.gender}</p>
    <p>{contact.email}</p>
    <p>{contact.phone}</p>
  </div>
)

export default PostItem
