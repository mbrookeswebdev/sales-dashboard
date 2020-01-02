export function calculateNumber(data) {
    let number = 0;
    for (let i = 0; i < data.length; i++) {
        number += data[i].number;
    }
    return number;
}

export function calculatePercentage(data) {
    let monthNow = new Date().getMonth();
    let numberThisMonth = (data.filter(entry => entry.month === monthNow)[0].number);

    let lastMonth = null;
    if (monthNow === 0) {
        lastMonth = 11;
    } else {
        lastMonth = (data.filter(entry => entry.month === (monthNow - 1))[0].month);
    }
    let numberLastMonth = (data.filter(entry => entry.month === lastMonth)[0].number);

    let difference = numberThisMonth - numberLastMonth;
    let percentage = ((difference / numberLastMonth) * 100).toFixed(2);
    return percentage;
}