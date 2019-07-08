/**
 * Returns the most recent time that Smogon data should be
 * completely collected. At the moment, this means we expect that
 * the data up to last month should be complete.
 */
export default () => {
  const validTime = new Date(
    new Date().getFullYear(),
    new Date().getMonth() - 1, 
    new Date().getDate()
  );
  return {
    month: validTime.getMonth() + 1,
    year: validTime.getFullYear(),
  }
}