export const useCommentTime = (date) => {
    let month = String(date.getUTCMonth() + 1);
    let day = String(date.getUTCDate());
    let hour = String(date.getHours());
    let minute = String(date.getMinutes());
    return `${outputValid(day)}.${outputValid(month)} ${outputValid(hour)}:${outputValid(minute)}`
}

const outputValid = (string) => {
    if (string.length == 1) return "0" + string 
    return string
}