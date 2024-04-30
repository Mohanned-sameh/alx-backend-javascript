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
      if (grade.length === 0) {
        grade.push({ studentId: student.id });
      }
      return { ...student, grade: grade[0].grade };
    });
}
