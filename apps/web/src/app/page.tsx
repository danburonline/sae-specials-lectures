/* eslint-disable simple-import-sort/imports */
// PlayPage.tsx

import React from 'react'
import SearchBar from './components/ui/searchBar' // Update the path to your SearchBar component

import Play from './components/ui/play'

export default function PlayPage() {
  const handleSearch = (query: string) => {
    // Implement your search logic here
    console.log('Searching for:', query)
  }

  return (
    <main className="h-screen">
      {/* Include the SearchBar component */}
      <SearchBar onSearch={handleSearch} />

      {/* Other content on your page */}
      <Play />
    </main>
  )
}
