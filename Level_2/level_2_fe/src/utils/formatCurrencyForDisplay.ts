
const formatCurrencyForDisplay = (num: number):string => {
    const price = num.toString().split(".");
    if (price.length == 1) {
        return `$${price[0]}.00`;
    }
    if (price.length > 1 && price[1].length == 1) price[1] += "0"

    return `$${price.join(".")}`;
}

export default formatCurrencyForDisplay;