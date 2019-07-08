const toKebabCase = (str) => {
  const dashedStr = str.replace(' ', '-');
  return dashedStr.toLowerCase();
}

export default toKebabCase;