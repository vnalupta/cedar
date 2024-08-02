import { FormProvider } from "@/components/formcontext";
import List from "@/components/list";

import "@/styles/global.scss";

export default function Home() {
  return (
    <>
      <main role="main">
        <FormProvider>
          <List>
          </List>
        </FormProvider>
      </main>
    </>
  );
}
