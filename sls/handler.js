module.exports.hello = async (event) => {
  const body = JSON.stringify({
    message: 'Me me im a function',
    input: event,
  }, null, 2)

  return {
    statusCode: 200,
    body
  }

  // idk this came out fo the box
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}