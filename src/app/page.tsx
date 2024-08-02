import Jumbotron from "@/components/jumbotron";
import Sheet from "@/components/sheet";
import "@/styles/global.scss";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: boolean | undefined };
}) {
  const completed = searchParams?.completed;

  return (
    <>
      <main role="main">
        <Jumbotron completed={completed} />
        {!completed && <Sheet />}
      </main>
    </>
  );
}
