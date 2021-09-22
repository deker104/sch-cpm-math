import Link from "next/link";
import { Fragment } from "react";

function Page() {
  return (
    <Fragment>
      <h1 className="text-center m-3">Добро пожаловать!</h1>
      <Link href="/create-board">
        <a>
          <div className="text-center">Создать новую доску</div>
        </a>
      </Link>
    </Fragment>
  );
}

export default Page;
