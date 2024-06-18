const countStudents = (path) => {
  const fs = require('fs');

  fs.readFileSync(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split('\n');
    const fields = {};
    const students = {};
    for (const i in lines) {
      if (i === 0) {
        const headers = lines[i].split(',');
        for (const j in headers) {
          fields[headers[j]] = j;
          students[headers[j]] = [];
        }
      } else if (lines[i] !== '') {
        const student = lines[i].split(',');
        for (const field in fields) {
          const idx = fields[field];
          students[field].push(student[idx]);
        }
      }
    }
    delete students[''];
    const nStudents = students['firstname'].length;
    console.log(`Number of students: ${nStudents}`);
    for (const field in students) {
      if (field !== 'firstname') {
        const list = students[field].join(', ');
        console.log(
          `Number of students in ${field}: ${students[field].length}. List: ${list}`
        );
      }
    }
  });
};

module.exports = countStudents;
