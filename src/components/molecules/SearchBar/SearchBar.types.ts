export interface SearchBarProps {
  onSearch: (query: string) => void
  onDateFilterChange: (startDate: Date | null, endDate: Date | null) => void
}
