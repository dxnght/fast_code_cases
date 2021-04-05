const today = new Date();
const year = today.getFullYear()
const month = today.getMonth()+1
const dateNow = today.getDate()

const date = `${year}/${month}/${dateNow}`
const time = today.getHours() + ":" + today.getMinutes() 

export const expires = (prop) => {
  const decrement = new Date(year, month, 0).getDate()

  if ((dateNow + prop) >= 32) {
    const date = year + '/' + (month + 2) + '/' + (dateNow + (prop - decrement))
    return date
  }
  const expireDate = year + '/' + (month + 1) + '/' + (dateNow + prop);
  return expireDate
}
export const dateTime = () => date+' '+time;
