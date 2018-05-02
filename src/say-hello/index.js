export default function (person) {
  const hello = 'Hello! '
  let result = hello

  if (typeof person === 'string') {
    result = result + person
  }

  if (typeof person === 'object' && person.name) {
    result = result + person.name + ' '
  }

  if (typeof person === 'object' && person.lastname) {
    result = result + person.lastname
  }

  if (!person) {
    result = result + 'Stranger'
  }

  return result.trim()
}
