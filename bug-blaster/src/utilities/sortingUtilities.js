export const sortTickets = (tickets, prefrerence) => {
  switch (prefrerence) {
    case "High to Low":
      return [...tickets].sort((a, b) => b.Priority.localeCompare(a.Priority));
    case "Low to High":
      return [...tickets].sort((a, b) => a.Priority.localeCompare(b.Priority));
    default:
      return tickets;
  }
};
