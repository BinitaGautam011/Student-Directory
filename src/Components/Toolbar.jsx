const Toolbar = ({
  searchTerm,
  courseFilter,
  statusFilter,
  sortBy,
  setSearchTerm,
  setCourseFilter,
  setStatusFilter,
  setSortBy,
}) => {
  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={courseFilter}
        onChange={(e) => setCourseFilter(e.target.value)}
      >
        <option value="all">All Courses</option>
        <option value="csit">BSc.CSIT</option>
        <option value="bca">BCA</option>
        <option value="bba">BBA</option>
      </select>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All Status</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="grade">Sort by Grade</option>
        <option value="status">Sort by Status</option>
      </select>
    </div>
  );
};

export default Toolbar;
