export const genCode = (str?: string) => {
  const arr = str?.split(' ')
  let rerult = arr?.map((item) => item.charAt(0))
  const code = rerult?.join('').toUpperCase()
  return code
}
