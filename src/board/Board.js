import { useState, Fragment } from "react";
import Student from "./Student";
import _ from "lodash";

function Board({ boardName, studentsList }) {
  const count = studentsList.length;
  const [students, setStudents] = useState(() => {
    var result = new Array(count);
    for (let i = 0; i < count; i++) {
      result[i] = {
        name: studentsList[i],
        deleted: false,
        score: 0,
      };
      if (studentsList[i] === "Федоров Юрий") {
        result[i].deleted = true;
      }
    }
    return result;
  });

  const components = students.map(({ name, deleted, score }, i) => {
    function handleDelete(deleted) {
      var studentsNew = students.slice();
      studentsNew[i].deleted = deleted;
      setStudents(studentsNew);
    }
    function handleChange(score) {
      var studentsNew = students.slice();
      studentsNew[i].score = score;
      setStudents(studentsNew);
    }
    return (
      <Student
        name={name}
        deleted={deleted}
        score={score}
        key={name}
        onChange={handleChange}
        onDelete={handleDelete}
      />
    );
  });

  function clear() {
    var studentsNew = students.slice();
    for (let i = 0; i < count; i++) {
      studentsNew[i] = {
        ...studentsNew[i],
        deleted: false,
        score: 0,
      };
    }
    setStudents(studentsNew);
  }

  function shuffle() {
    setStudents(_.shuffle(students));
  }

  function sort() {
    setStudents(_.sortBy(students, ["name"]));
  }

  return (
    <Fragment>
      <h1 className="text-center m-3">{boardName}</h1>
      <div className="mb-3">
        <button type="button" className="btn btn-primary mx-1" onClick={clear}>
          Очистить
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={shuffle}
        >
          Перемешать
        </button>
        <button type="button" className="btn btn-primary mx-1" onClick={sort}>
          Отсортировать
        </button>
      </div>
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

export default Board;
