const FilterBar = ({ onFilterChange }) => {
    return (
      <div className="flex justify-between p-4 bg-gray-100">
        <select
          className="border p-2 rounded"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Laptop">Laptop</option>
        </select>
        
      </div>
    );
  };
  
  export default FilterBar;
  