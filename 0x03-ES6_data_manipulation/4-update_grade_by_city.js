export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades
) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter(
        (newGrade) => newGrade.studentId === student.id
      );
      student.grade = grade.length > 0 ? grade[0].grade : 'N/A';
      return student;
    });
}
