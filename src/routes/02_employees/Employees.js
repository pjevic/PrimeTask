import Table from "../../components/ui/table/Table";

import React from "react";

function Employees() {
  return (
    <div>
      <Table heading="Employees" buttons={["add", "del"]} />
    </div>
  );
}

export default Employees;
