function countStudents(path) {
  const newPromise = Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n').slice(1);
      console.log(`Number of students: ${lines.length}`);
      const fields = {};
      for (const line of lines) {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
      delete fields.field;
      for (const field in fields) {
        if (field) {
          console.log(
            `Number of students in ${field}: ${
              fields[field].length
            }. List: ${fields[field].join(', ')}`
          );
        }
      }
      resolve();
    });
  });
  return newPromise;
}

module.exports = countStudents;
