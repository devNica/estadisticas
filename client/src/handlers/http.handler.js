import http from '../libs/axios.libs'

const serializeData = (responseHTTP) => {
  const { data } = responseHTTP;
  const { msg, meta } = data;
  return { meta, msg };
}

const validateHttpErrors = (error) => {
  if (error.response) {
    let code =
      error.response.status === 400
        ? '400'
        : error.response.status === 401
          ? '401'
          : error.response.status === 404
            ? '404'
            : error.response.status === 500
              ? '500'
              : null
    return code
      ? { code, message: error.response.data.message }
      : error.response
  } else {
    return new Error('')
  }
}

/**
 * 
 * @param {string} Request 
 * @param {string} path 
 * @param {Object} data 
 * @param {Object} customs
 */
const httpHandler = async (method = null, path = null, data = {}, customHeaders = {}) => {
  try {
    if (!method || !path) throw Error('the controller expected the http and path parameters, but one of these was not found')
    const response = await http({ customHeaders })[`${method}`](path, data)
    return serializeData(response)
  } catch (error) {
   
    const err = validateHttpErrors(error);
    if (typeof err === "string") {
      return { meta: { action: false }, msg: err };
    } else {
      return { meta: { action: false }, msg: err.message };
    }
  }


}

export default httpHandler