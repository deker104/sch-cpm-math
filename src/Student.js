import Checkbox from "./Checkbox";
import Deleted from "./Deleted";
import TripleCheckbox from "./TripleCheckbox";

function Student({ name, score, onChange, deleted, onDelete }) {
  function handleDelete({ checked }) {
    onDelete(checked);
  }

  return (
    <tr>
      <th scope="row">
        <Deleted deleted={deleted}>{name}</Deleted>
      </th>
      <td>
        <Checkbox onChange={handleDelete} checked={deleted} />
      </td>
      <td>
        <TripleCheckbox onChange={onChange} score={score} />
      </td>
      {/* <td>{score}</td> */}
    </tr>
  );
}

export default Student;
