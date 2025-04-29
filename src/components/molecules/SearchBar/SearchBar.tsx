"use client"

import type React from "react"

import { useState } from "react"
import { Search, Calendar, X, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/atoms/Input/Input"
import { Button } from "@/components/atoms/Button/Button"
import type { SearchBarProps } from "./SearchBar.types"

export function SearchBar({ onSearch, onDateFilterChange }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showDateFilter, setShowDateFilter] = useState(false)
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
    onSearch("")
  }

  const handleDateFilter = () => {
    const start = startDate ? new Date(startDate) : null
    const end = endDate ? new Date(endDate) : null
    onDateFilterChange(start, end)
  }

  const handleClearDateFilter = () => {
    setStartDate("")
    setEndDate("")
    onDateFilterChange(null, null)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 transition-all">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-10 py-2.5 rounded-lg border-gray-200 focus:border-[#7695ec] focus:ring-1 focus:ring-[#7695ec] transition-all"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleSearch}
            className="flex items-center gap-1.5 bg-[#7695ec] hover:bg-[#6585dc] text-white px-4 py-2.5 rounded-lg transition-all"
          >
            <Search size={18} />
            <span className="hidden sm:inline">Search</span>
          </Button>

          <Button
            variant="secondary"
            onClick={() => setShowDateFilter(!showDateFilter)}
            className="flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2.5 rounded-lg transition-all"
          >
            <Calendar size={18} />
            <span className="hidden sm:inline">Date Filter</span>
            {showDateFilter ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </div>
      </div>

      {showDateFilter && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-fadeIn">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1.5">
                From Date
              </label>
              <Input
                id="start-date"
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="rounded-lg border-gray-200 focus:border-[#7695ec] focus:ring-1 focus:ring-[#7695ec]"
              />
            </div>
            <div className="flex-grow">
              <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1.5">
                To Date
              </label>
              <Input
                id="end-date"
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="rounded-lg border-gray-200 focus:border-[#7695ec] focus:ring-1 focus:ring-[#7695ec]"
              />
            </div>
            <div className="flex items-end gap-2 mt-2 md:mt-0">
              <Button
                onClick={handleDateFilter}
                className="flex-grow md:flex-grow-0 bg-[#7695ec] hover:bg-[#6585dc] text-white px-4 py-2.5 rounded-lg transition-all"
              >
                Apply
              </Button>
              <Button
                variant="secondary"
                onClick={handleClearDateFilter}
                className="flex-grow md:flex-grow-0 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2.5 rounded-lg transition-all"
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
