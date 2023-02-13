import { type FC } from "react";
import { Table } from "../Table/Table";
import { DragDropFile } from "./DragDropFile";

type Props = {};

export const MainContent: FC<Props> = ({}) => {
  return (
    <DragDropFile>
      <section className="w-full h-full">
        <Table />
      </section>
    </DragDropFile>
  );
};
