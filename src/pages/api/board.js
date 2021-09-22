import { addBoard } from "../../board/api";

export default async function handler(req, res) {
  if (req.method === "POST") {
    var { boardName, studentsList } = req.body;
    studentsList = studentsList.trimEnd().split(/\r?\n/).sort();

    const result = await addBoard({ boardName, studentsList });
    res.json(result);
  }
  res.status(405).end();
}
