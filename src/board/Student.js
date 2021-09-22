import Checkbox from "../utils/Checkbox";
import Deleted from "../utils/Deleted";
import TripleCheckbox from "../utils/TripleCheckbox";

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
