function solution(today, terms, privacies) {
    const answer = []
    const termObj = makeTerm(terms)
    const todayValue = dateTransfer(today)

    privacies.forEach((privacy, index) => {
        const [date, term] = privacy.split(' ')
        const privacyValue = dateTransfer(date, termObj[term])
        if (todayValue >= privacyValue) answer.push(index + 1)
    })

    return answer
}

function makeTerm(terms) {
    const result = {}
    terms.forEach(term => {
        const [key, value] = term.split(' ')
        result[key] = Number(value)
    })
    return result
}

function dateTransfer(dateString, term = 0) {
    const [year, month, day] = dateString.split('.')
    return Number(year) * 12 * 28 + (Number(month) + term) * 28 + Number(day)
}