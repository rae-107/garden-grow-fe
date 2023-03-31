export const aliasQuery = (req, operationName) => {
  console.log('name', hasOperationName)
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
  }
}