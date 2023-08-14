// export function convertDate(date:string){
//     const dateParts = date.split(/[- :]/); // Divide a string nos caracteres de data e hora
//     const utcDate = new Date(Date.UTC(
//         Number(dateParts[0]),
//         Number(dateParts[1]) - 1,
//         Number(dateParts[2]), 
//         Number(dateParts[3]), 
//         Number(dateParts[4]), 
//         Number(dateParts[5])));
//     return utcDate;
// }

export function convertDate(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-');
    const [hour, minute, second] = timePart.split(':');
    
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)));
}