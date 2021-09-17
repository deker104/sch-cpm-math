import Checkbox from "./Checkbox";

function TripleCheckbox({ onChange, score }) {
  function handleChange({ checked, value }) {
    if (checked) {
      onChange(+value + 1);
    } else {
      onChange(+value);
    }
  }

  return (
    <div>
      <Checkbox value={0} onChange={handleChange} checked={score > 0} />
      <Checkbox value={1} onChange={handleChange} checked={score > 1} />
      <Checkbox value={2} onChange={handleChange} checked={score > 2} />
    </div>
  );
}

export default TripleCheckbox;
