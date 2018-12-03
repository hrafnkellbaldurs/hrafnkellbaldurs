export default function debounce(callback, delay) {
    let timeout = false

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => { callback(...args) }, delay)
    }
}
