export function getDate (date) {
    if (!date) date = new Date()
    const dateInSeconds = date.getTime()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const formatedDate = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds} ${hours > 12 ? 'PM' : 'AM'}`
    return {currentDate: formatedDate, dateInSeconds }
}

export function sortByID (array) {
    return array.toSorted((a, b) => Number(b.id) - Number(a.id))
}

export function getLastDate (array) {
    const sortedArrayByID = sortByID(array)
    const lastAddedElement = sortedArrayByID[0]
    const dateLastAddedElement = lastAddedElement.date
    return dateLastAddedElement
}