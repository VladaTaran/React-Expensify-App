export default (expenses) => {
    return expenses
        .map(expense => expense.amount)
        .reduce((sumAmountPrev, amountNext) => sumAmountPrev + amountNext, 0);
};
