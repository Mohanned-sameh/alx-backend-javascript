export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((std) => std.location === city);

  return studentsByCity.map((std) => {
    const stdGrade = newGrades.find((grade) => grade.studentId === std.id);
    return {
      ...std,
      grade: stdGrade ? stdGrade.grade : 'N/A',
    };
  });
}
