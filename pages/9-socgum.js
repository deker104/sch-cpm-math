import student_names from "../src/students/9-socgum.json";
import StudentsBoard from "../src/StudentsBoard";

function Page() {
  return <StudentsBoard student_names={student_names} />;
}

export default Page;
