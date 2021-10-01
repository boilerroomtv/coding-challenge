import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import PropTypes from 'prop-types'

export default function ListView () {
  const [filterBy, setFilterBy] = useState('')
  const [sortBy, setSortBy] = useState('')

  return (
    <div>
      <Filter filterBy={filterBy} setFilterBy={setFilterBy} />
      <Sort sortBy={sortBy} setFilterBy={setSortBy} />
      <List sortBy={sortBy} filterBy={filterBy} />
    </div>
  )
}

// Filter Component

const Filter = ({ filterBy, setFilterBy }) =>
  <input
    onChange={e => setFilterBy(e.target.value)}
    value={filterBy}
  />

Filter.propTypes = {
  filterBy: PropTypes.string.isRequired,
  setFilterBy: PropTypes.func.isRequired
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
  query GetSets($filterBy: String, $sortBy: String) {
    sets(filterBy: $filterBy, sortBy: $sortBy) {
      id
    }
  }
`

const List = ({ sortBy, filterBy }) => {
  const { loading, data } = useQuery(GET_SETS, { variables: {} })

  if (loading) return null

  console.log(data)

  return <h1>List</h1>
}

List.propTypes = {
  sortBy: PropTypes.string.isRequired,
  filterBy: PropTypes.string.isRequired
}
