import {
  ChangeEvent,
  Dispatch,
  DragEvent,
  ReactNode,
  createContext,
  useReducer,
} from "react";
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

export const UploadContext = createContext<{
  files: State;
  dispatch: Dispatch<Action>;
} | null >(null);

export const UploadProvider = ({ children }: { children: ReactNode }) => {
  const [files, dispatch] = useReducer(UploadReducer, {
    isDragActive: false,
    files: [],
  });
  return (
    <UploadContext.Provider value={{ files, dispatch }}>
      {children}
    </UploadContext.Provider>
  );
};

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
        const files = getFilesFromFileList(action.payload.e.dataTransfer.files);
        const stateFiles = state.files.slice();
        return {
          isDragActive: false,
          files: [...stateFiles, ...files],
        };
      }
      return {
        ...state,
        isDragActive: false,
      };
    }
    case "change": {
      if (action.payload.e.target.files && action.payload.e.target.files[0]) {
        const files = getFilesFromFileList(action.payload.e.target.files);
        const stateFiles = state.files.slice();
        return {
          ...state,
          files: [...stateFiles, ...files],
        };
      }
    }
    default:
      throw new Error("Invalid type selected");
  }
};
