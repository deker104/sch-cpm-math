import Link from "next/link";

function Page() {
  return (
    <ul>
      <li>
        <Link href="/9-socgum">9 класс (соц-гум)</Link>
      </li>
      <li>
        <Link href="/10-math">10 класс (математика)</Link>
      </li>
      <li>
        <Link href="/11-inf">11 класс (информатика)</Link>
      </li>
      <li>
        <Link href="/11-math">11 класс (математика)</Link>
      </li>
    </ul>
  );
}

export default Page;
