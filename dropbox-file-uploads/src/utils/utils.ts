export function getFilesFromFileList(fileList: FileList): File[] {
  let nextFiles: File[] = [];

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);
    if (!file) break;
    nextFiles.push(file);
  }
  return nextFiles;
}
