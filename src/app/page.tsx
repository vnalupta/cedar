import Header from "@/components/header";
import Jumbotron from "@/components/jumbotron";
import Sheet from "@/components/sheet";
import "@/styles/global.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main role="main">
        <Jumbotron completed={false}/>
        <Sheet />
      </main>
    </>
  );
}
