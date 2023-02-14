import { ChangeEvent, DragEvent, createContext } from "react";
import { getFilesFromFileList } from "../utils/utils";

type State = {
  isDragActive: boolean;
  files: File[];
};

type Action =
  | {
      type: "drag";
      payload: {
        e: DragEvent<HTMLElement>;
      };
    }
  | {
      type: "drop";
      payload: {
        e: DragEvent<HTMLInputElement>;
      };
    }
  | {
      type: "change";
      payload: {
        e: ChangeEvent<HTMLInputElement>;
      };
    }
  | {
      type: "add";
      payload: {
        file: File;
      };
    }
  | {
      type: "delete";
      payload: {
        file: File;
      };
    };

const UploadContext = createContext(null);

export const UploadReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "drag": {
      if (
        action.payload.e.type === "dragenter" ||
        action.payload.e.type === "dragover"
      ) {
        return {
          ...state,
          isDragActive: true,
        };
      } else if (action.payload.e.type === "dragleave") {
        return {
          ...state,
          isDragActive: false,
        };
      }
    }
    case "drop": {
      if (
        action.payload.e.dataTransfer?.files &&
        action.payload.e.dataTransfer?.files[0]
      ) {
        const files = getFilesFromFileList(action.payload.e.dataTransfer.files)
        return {
          isDragActive: false,
          files,
        };
      }
      return {
        ...state,
        isDragActive: false,
      };
    }
    case "change":
      {
        if (action.payload.e.target.files && action.payload.e.target.files[0]) {
            const files = getFilesFromFileList(action.payload.e.target.files)
          return {
            ...state,
            files,
          };
        }
      }
    default:
      throw new Error('Invalid type selected');
  }
};

const handleDrag = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
};
// triggers when file is dropped
const handleDrop = (e: DragEvent<HTMLInputElement>) => {
  e.preventDefault();
  e.stopPropagation();
};
// triggers when file is selected with click
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
};
