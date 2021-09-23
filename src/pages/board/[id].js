import Board from "../../board/Board";
import { getBoard } from "../../board/api";

function Page({ boardName, studentsList }) {
  return <Board boardName={boardName} studentsList={studentsList} />;
}

export async function getServerSideProps({ params: { id } }) {
  if (id.length !== 24) {
    return { notFound: true };
  }

  const board = await getBoard(id);
  if (!board) {
    return { notFound: true };
  }

  const { boardName, studentsList } = board;
  return { props: { boardName, studentsList } };
}

export default Page;
