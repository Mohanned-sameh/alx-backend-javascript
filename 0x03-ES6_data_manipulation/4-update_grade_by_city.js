export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades
) {
  const studentsInCity = getListStudents().filter(
    (student) => student.city === city
  );
  return studentsInCity.map((student) => {
    const studentGrade = newGrades.find(
      (grade) => grade.studentId === student.id
    );
    if (studentGrade) {
      return { ...student, grade: studentGrade.grade };
    }
    return student;
  });
}
