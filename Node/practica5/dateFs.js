import { format } from "date-fns";

const date =new Date();
const formattedDate = format(date, 'dd-MM-yyyy');

console.log(`Hoy es: ${formattedDate}`);