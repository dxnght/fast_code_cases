export const listShorter = (list, Component=null) => {
  let show = []
  const notEmpty = (list !== null && list !== undefined && Array.isArray(list))
  
  if (notEmpty && Component === null) {
    for (let index = 0; index < 5; index++) {
      show.push(list[index])
    }
  } else if (notEmpty) {
    for (let index = 0; index < 4; index++) {
      show.push(<Component n={list[index].name} key={list[index].id} />)
    }
  }

  return show
}
