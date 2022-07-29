const serializeResponseORM = (data) => {
    const r = JSON.stringify(data, null, 2)
    return JSON.parse(r)
  }

  const isObjEmpty = (obj) => {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) return false
    }
  
    return true
  }

  export {
    serializeResponseORM,
    isObjEmpty
  }