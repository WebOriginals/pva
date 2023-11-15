export const phoneFormatV2 = (code, number, plus = true) => {
    if (code == null) return ''
    if (number == null) return ''

    number = number.slice(code.length);

    let codeCity = number.substring(0, 3)
    let subscriber = number.slice(3);
    let abonentArr = ''

    if (subscriber.length === 8) {
        abonentArr = subscriber.match(/.{1,3}/g)
        subscriber = abonentArr.join(" ")
    } else if (subscriber.length === 7) {
        abonentArr = [subscriber.substring(0, 3)]
        subscriber = subscriber.slice(3);
        subscriber = subscriber.match(/.{1,2}/g)
        abonentArr = abonentArr.concat(subscriber);
        subscriber = abonentArr.join(" ")
    } else if (subscriber.length === 6) {
        abonentArr = subscriber.match(/.{1,2}/g)
        subscriber = abonentArr.join(" ")
    }

    return (plus ? '+' : '') + code + ' (' + codeCity + ') ' + subscriber
}