function formatDate(date) {
  const weekDay = new Date(date)
    .toLocaleString("en-us", {
      weekday: "long",
    })
    .slice(0, 3);
  const monthDay = new Date(date).getUTCDate();
  const month = new Date(date)
    .toLocaleString("en-us", {
      month: "long",
    })
    .slice(0, 3);
  return { weekDay, monthDay, month };
}

export { formatDate };
