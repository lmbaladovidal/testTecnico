import React from 'react'

export const Customer = ({customer}) => {
  return (
    <h6>{customer.name} {customer.lastname} {customer.idType} {customer.totalPrice} {customer.date}</h6>
  )
}
