import { useState } from "react";

const Toolbar = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = studentData.filter((student, i) => {
    return student.name.toLowerCase().includes(setSearch.toLowerCase());
  });
  return (
    <div>
      <input
        type="text"
        placeholder="🔎 Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};
export default Toolbar;
