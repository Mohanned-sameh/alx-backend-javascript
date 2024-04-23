export default function createReportObject(employeesList) {
  const report = {
    employees: employeesList,
    getEmployees: () => employeesList,
    getEmployeesCount: () => employeesList.length,
    getEmployeesWithHigherSalary: (salary) =>
      employeesList.filter((employee) => employee.salary > salary),
  };

  return report;
}
