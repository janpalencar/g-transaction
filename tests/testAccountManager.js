describe('AccountManager', function(){


    var accManager = new AccountManager();
    var accounts = [];
    var _accounts = function() {return accounts;};
    accManager.generateAccount(_accounts);


    it('should generate an account with a >0 balance ' + accounts[0], function(){
        expect(accounts[0].getBalance()).not.toBeLessThan(0);
    });

    it('should generate an account with an owner consisting from 2 names', function(){
        expect(accounts[0].getOwner()).toBeDefined();
        expect(accounts[0].toString()).toMatch(/\w+\s+\w+/);
    });

    it('should raise the amount on the existing accounts ACTIVE only = donateRandomToAllAccounts()', function(){
        var myAccounts = [];
        var amounts = []
        var _myAccounts = function() {return myAccounts;};

        for(var i = 0 ; i < 10 ; i++) {
            var a = accManager.generateAccount(_myAccounts);
            amounts[i] = a.getBalance();
        }
        _myAccounts()[3].deactivate();

        accManager.donateRandomToAllAccounts(_myAccounts);

        var  risenTotal = 0;

        for(var i = 0 ; i < 10 ; i++) {
            if (_myAccounts()[i].getBalance() > amounts[i]) {
                risenTotal++;
            }
        }

        expect(risenTotal).toEqual(9);

    });

    it('should raise the amount on the existing accounts = donateRandomToAllAccounts()', function(){
        var myAccounts = [];
        var amounts = []
        var _myAccounts = function() {return myAccounts;};

        for(var i = 0 ; i < 10 ; i++) {
            var a = accManager.generateAccount(_myAccounts);
            amounts[i] = a.getBalance();
        }

        accManager.donateRandomToAllAccounts(_myAccounts);

        for(var i = 0 ; i < 10 ; i++) {
            expect((_myAccounts())[i].getBalance()).not.toBeLessThan(amounts[i]);
        }
    });


});