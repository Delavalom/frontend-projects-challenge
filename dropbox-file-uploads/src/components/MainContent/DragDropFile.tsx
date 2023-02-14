import {
  type FC,
  useRef,
  ReactNode,
  ChangeEvent,
  DragEvent,
  useContext,
} from "react";
import { UploadContext } from "../../context/UploadContext";

type Props = {
  children: ReactNode;
};

export const DragDropFile: FC<Props> = ({ children }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const upload = useContext(UploadContext);

  const handleDrag = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    upload?.dispatch({
      type: "drag",
      payload: {
        e,
      },
    });
  };
  // triggers when file is dropped
  const handleDrop = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    upload?.dispatch({
      type: "drop",
      payload: {
        e,
      },
    });
  };
  // triggers when file is selected with click
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    upload?.dispatch({
      type: "change",
      payload: {
        e,
      },
    });
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <form
      id="input-file-upload"
      onSubmit={(e) => e.preventDefault()}
      onDragEnter={handleDrag}
      className={`w-full h-full flex p-4 flex-col gap-2 ${
        upload?.files.isDragActive
          ? "border-4 border-dashed border-slate-800"
          : ""
      }`}
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
      <button
        onClick={onButtonClick}
        className="bg-slate-800 text-slate-50 hover:text-slate-900 hover:bg-slate-200 transition-colors duration-300"
      >
        Upload File
      </button>
      <label htmlFor="input-file-upload">
        {upload?.files.isDragActive && (
          <section
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className="w-full h-full absolute top-0 right-0 bottom-0 left-0"
          ></section>
        )}
        {children}
      </label>
    </form>
  );
};
