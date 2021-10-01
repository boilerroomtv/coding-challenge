import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import PropTypes from 'prop-types'

export default function ListView () {
  const [filterByTitle, setFilterByTitle] = useState('')
  const [sortBy, setSortBy] = useState('')

  return (
    <div>
      <Filter filterByTitle={filterByTitle} setFilterByTitle={setFilterByTitle} />
      <Sort sortBy={sortBy} setFilterByTitle={setSortBy} />
      <List sortBy={sortBy} filterByTitle={filterByTitle} />
    </div>
  )
}

// Filter Component

const Filter = ({ filterByTitle, setFilterByTitle }) =>
  <input
    onChange={e => setFilterByTitle(e.target.value)}
    value={filterByTitle}
  />

Filter.propTypes = {
  filterByTitle: PropTypes.string.isRequired,
  setFilterByTitle: PropTypes.func.isRequired
}

// Sort Component

const Sort = ({ sortBy, setSortBy }) =>
  <div>
    add sort filter here
  </div>

Sort.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired
}

// List Component

const GET_SETS = gql`
  query GetSets($filterByTitle: String, $sortBy: String) {
    sets(filterByTitle: $filterByTitle, sortBy: $sortBy) {
      id
    }
  }
`

const List = ({ sortBy, filterByTitle }) => {
  const { loading, data } = useQuery(GET_SETS, { variables: {} })

  if (loading) return null

  console.log(data)

  return <h1>List</h1>
}

List.propTypes = {
  sortBy: PropTypes.string.isRequired,
  filterByTitle: PropTypes.string.isRequired
}
