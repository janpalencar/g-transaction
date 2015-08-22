/**
 * Created by jan on 20/10/14.
 */


//TODO
// 1. should be able to process any transaction
// 2. should have storage of transactions (?) -> didn't we wanted to store it elsewhere
// 3. should be able to cummulate transactions
// 4. should be able to generate meaningful transaction between random accounts

//TODO maybe it is interesting to set fnAccounts via constructor and then call a member field (function) to retrieve values


function TransactionManager() {

}

TransactionManager.prototype = {

    generateTransaction: function (fnAccounts) {
        var accounts = Object.create(fnAccounts());
        var srcIndex = Math.floor(Math.random() * 7) % accounts.length;
        var srcAccount = accounts[srcIndex];
        accounts.splice(srcIndex, 1);

        var destIndex = Math.floor(Math.random() * 7) % accounts.length;
        var destAccount = accounts[destIndex];

        var accManager = new AccountManager();
        var withdrawalAmount = accManager.generateAmount() % srcAccount.getBalance();

        return new Transaction(srcAccount, destAccount, withdrawalAmount);

    }, processTransaction: function (tx, fnAccounts) {

        var accounts = fnAccounts();
        var _fromAccount = tx.getFrom();
        var _toAccount = tx.getTo();

        console.log("#TM.pT: " + _fromAccount + " | " + _toAccount);

        if (_fromAccount.withdraw(tx.getAmount())) {
            _toAccount.add(tx.getAmount());
        } else {
            // TODO error not processed balance too low
        }

        console.log("#TM.pT: " + _fromAccount + " | " + _toAccount);
    }
}