export const parseBoolean = (arg: "true" | "false" | "" | string) => {
  switch (arg) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      break;
  }
};
