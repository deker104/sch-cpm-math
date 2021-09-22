import { Fragment, useState } from "react";
import { useRouter } from "next/dist/client/router";

function BoardForm() {
  const [boardName, setBoardName] = useState();
  const [studentsList, setStudentsList] = useState();

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/board", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ boardName, studentsList }),
    }).then((res) => res.json());

    router.push(`/board/${res.id}`);
  }

  return (
    <Fragment>
      <h1 className="text-center m-3">Создание доски учеников</h1>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Название доски
        </label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          name="boardName"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="namesInput" className="form-label">
          Список учеников
        </label>
        <textarea
          className="form-control"
          id="namesInput"
          name="studentsList"
          value={studentsList}
          onChange={(e) => setStudentsList(e.target.value)}
          rows="3"
          required
        ></textarea>
        <div id="namesHelp" className="form-text">
          1 строка = 1 ученик
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mb-3"
        onClick={handleSubmit}
      >
        Создать
      </button>
    </Fragment>
  );
}

export default BoardForm;
