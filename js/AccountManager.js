/**
 * Created by jan on 20/10/14.
 */

function AccountManager() {
}

AccountManager.prototype.generateAmount = function () {
    var s1 = Math.floor(Math.random() * 7) % 10;
    var s2 = Math.floor(Math.random() * 7) % 10;
    var s3 = Math.floor(Math.random() * 7) % 10;

    var sum = s1 * 1000 + s2 * 100 + s3 * 10;
    return sum;
}

AccountManager.prototype.generateAccount = function (accounts) {

    var owners = (function (a) {
        var o = [];

        for (var i = 0; i < a.length; i++) {
            o[i] = a[i].getOwner();
        }
        return o;
    });
    var _owners = function () {
        return owners(accounts())
    };

    var owner = (new OwnerGenerator(_owners)).generateOwner();
    var account = new Account(owner, this.generateAmount());
    (accounts())[accounts().length] = account;

    return account;
}

AccountManager.prototype.donateRandomToAllAccounts = function (accounts) {
    var allAccounts = accounts();
    for (var i = 0; i < allAccounts.length; i++) {

        //We will donate only to active accounts
        if (allAccounts[i].isActive())
            allAccounts[i].add(this.generateAmount());
    }
}