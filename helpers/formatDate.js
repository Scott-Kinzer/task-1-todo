export const formatDate = (date) => {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
}