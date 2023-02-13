import { ReactNode, type FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-1">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};
