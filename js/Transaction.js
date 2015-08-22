/**
 * Created by jan on 20/10/14.
 */



function Transaction(srcAccount, destAccount, amount) {
    this.from = srcAccount;
    this.to = destAccount;
    this.amount = amount;

    this.processed = false;
    this.result = null;
}


Transaction.prototype = {

    process: function () {
        this.processed = true;
    }, getFrom: function () {
        return this.from;
    }, getTo: function () {
        return this.to;
    }, getAmount: function () {
        return this.amount;
    }
}

var ResultType = Object.freeze({OK: 0, ERROR: 1});

function TransactionResult(type, error) {
    this.type = type;
    this.error = error;
}
