import { useState, Fragment } from "react";
import Student from "./Student";
import _ from "lodash";

function StudentsBoard({ student_names }) {
  const count = student_names.length;
  const [students, setStudents] = useState(() => {
    var result = new Array(count);
    for (let i = 0; i < count; i++) {
      result[i] = {
        name: student_names[i],
        deleted: false,
        score: 0,
      };
      if (student_names[i] === "Федоров Юрий") {
        result[i].deleted = true;
      }
    }
    return result;
  });

  const components = students.map(({ name, deleted, score }, i) => {
    function handleDelete(deleted) {
      var students_new = students.slice();
      students_new[i].deleted = deleted;
      setStudents(students_new);
    }
    function handleChange(score) {
      var students_new = students.slice();
      students_new[i].score = score;
      setStudents(students_new);
    }
    return (
      <Student
        name={name}
        deleted={deleted}
        score={score}
        onChange={handleChange}
        onDelete={handleDelete}
      />
    );
  });

  function clear() {
    var students_new = students.slice();
    for (let i = 0; i < count; i++) {
      students_new[i] = {
        ...students_new[i],
        deleted: false,
        score: 0,
      };
    }
    setStudents(students_new);
  }

  function shuffle() {
    setStudents(_.shuffle(students.slice()));
  }

  return (
    <Fragment>
      <br />
      <button type="button" className="btn btn-primary" onClick={clear}>
        Очистить
      </button>{" "}
      <button type="button" className="btn btn-primary" onClick={shuffle}>
        Перемешать
      </button>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Отсутствует</th>
            <th scope="col">Ошибки</th>
          </tr>
        </thead>
        <tbody>{components}</tbody>
      </table>
    </Fragment>
  );
}

export default StudentsBoard;
