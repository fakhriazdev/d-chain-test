export const MonthlyInstallmentCount = (p, n) => {
    console.log(p)
    if (p === 0 || n === 0) return 0;

    let i;

    if (p >= 100000000 && p <= 500000000) {
        i = 0.07 / 12;
    } else if (p > 500000000 && p <= 1000000000) {
        i = 0.075 / 12;
    } else if (p > 1000000000 && p <= 1500000000) {
        i = 0.08 / 12;
    } else if (p > 1500000000 && p <= 2000000000) {
        i = 0.085 / 12;
    } else if (p > 2000000000 && p <= 2500000000) {
        i = 0.09 / 12;
    }

    const r = i;
    const result = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    return result.toFixed(2);

};
