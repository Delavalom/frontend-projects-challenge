import {
  ChangeEvent,
  DragEvent,
  useState,
  type FC,
  ChangeEventHandler,
  DragEventHandler,
  useRef,
} from "react";
import { Table } from "../Table/Table";

type Props = {};

export const MainContent: FC<Props> = ({}) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  // triggers when file is dropped
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };
  // triggers when file is selected with click
  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };
  return (
    <form
      id="input-file-upload"
      onSubmit={(e) => e.preventDefault()}
      onDragEnter={handleDrag}
      className="w-full h-full flex p-4 flex-col gap-2"
    >
      <input
        id="input-file-upload"
        ref={inputRef}
        placeholder="Upload Files"
        type="file"
        className="hidden"
        multiple={true}
        onChange={handleChange}
      />
      <button className="">Upload File</button>
      <label htmlFor="input-file-upload">
        {dragActive && (
          <section
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`w-full h-full ${
              dragActive ? "border-dashed border-slate-800" : ""
            }`}
          >
            <Table />
          </section>
        )}
      </label>
    </form>
  );
};
