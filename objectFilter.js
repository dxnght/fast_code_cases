// delete fields inside object and returns new filtered object.
// params: obj - object, filter - array

// const filteredObject = (Object, Array) => {...}
const filtredObject = (obj, filter) => {
  const neverMind = {}
  Object.keys(obj).map(key => { 
    if (filter.includes(key)) {
      key = 'i'
      neverMind[key] = obj[key]
    }
    // for every map iteration returns object's field-value
    return neverMind[key] = obj[key]
  })

  const filtred = {}
  Object.entries(neverMind).forEach(([key, value]) => {
    if (key !== 'i' && value !== 'i') {
      filtred[key] = neverMind[key]
    }
  })
  return filtred
}
