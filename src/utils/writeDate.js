/*  I could use moment.js but it's too much for this test so I picked up the folowing
    fn from stackoverflow
    https://pt.stackoverflow.com/questions/221825/como-formatar-uma-data-por-extenso
*/
export const writeDate = (strDate) => {
  const date = strDate ? new Date(strDate) : new Date();

  const day = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ][date.getDay()];
  const nDay = date.getDate();
  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ][date.getMonth()];
  const year = date.getFullYear();

  return `${day}, ${nDay} de ${month} de ${year}`;
};
