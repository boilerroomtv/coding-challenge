import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_SETS = gql`
  query GetSets($filterBy: String, $sortBy: String) {
    sets(filterBy: $filterBy, sortBy: $sortBy) {
      id
    }
  }
`

export default function ListView () {
  const { loading, data } = useQuery(GET_SETS)
  const [filterBy, setFilterBy] = useState('')
  const [sortBy, setSortBy] = useState('')

  if (loading) return null

  console.log(data)

  return (
    <div>
      <input onChange={e => setFilterBy(e.target.value)} value={filterBy} />
      <List />
    </div>
  )
}

const List = () => {
  const { loading, data } = useQuery(GET_SETS)

  return <h1>List</h1>
}
