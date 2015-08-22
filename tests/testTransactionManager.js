describe('TransactionManager', function(){


    var txManager = new TransactionManager();
    var accManager = new AccountManager();
    var accounts = [];
    var _accounts = function() {return accounts;};

    for(var i = 0 ; i < 10 ; i++) {
        accManager.generateAccount(_accounts);
    }
    console.log(_accounts());
    console.log(_accounts().length);

    it('should generate a transaction that is meaningful (amount is less than balance on account of withdrawal) ', function(){
        var tx = txManager.generateTransaction(_accounts);
        var aFrom = tx.getFrom();
        var amount = tx.getAmount();

        expect(aFrom.getBalance()).toBeGreaterThan(amount);

    });

    it('should generate a transaction and process it - correctly withdraws from From account and adds to To account) ', function(){
        var tx = txManager.generateTransaction(_accounts);
        var amount =  tx.getAmount();

        var _fromAccount = tx.getFrom();
        var _idxFromAccount = _accounts().indexOf(_fromAccount);
        var _fromBalance = _fromAccount.getBalance();

        var _toAccount = tx.getTo();
        var _idxToAccount = _accounts().indexOf(_toAccount);
        var _toBalance = _toAccount.getBalance();

        txManager.processTransaction(tx, _accounts);

        var _afterTxFromAccount = (_accounts())[_idxFromAccount];
        var _afterTxToAccount =  (_accounts())[_idxToAccount];
        var withdrawalAmount = _fromBalance - _afterTxFromAccount.getBalance();
        var addedAmount = _afterTxToAccount.getBalance() - _toBalance;

        expect(withdrawalAmount).not.toEqual(0);
        expect(withdrawalAmount).toEqual(addedAmount);

    });

});