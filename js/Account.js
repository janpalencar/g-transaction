/**
 * Created by jan on 20/10/14.
 */

function Account(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.active = true;
};


Account.prototype = {
    getOwner: function () {
        return this.owner;
    }, isActive: function () {
        return this.active;
    }, deactivate: function () {
        this.active = false;
    }, getBalance: function () {
        return this.balance;
    }, add: function (amount) {
        amount = amount || 0;
        this.balance += amount;
    }, withdraw: function (amount) {
        amount = amount || 0;
        if (this.balance > amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }, toString: function () {
        return "[" + this.getOwner().firstName + " " + this.getOwner().lastName + ", " + this.getBalance() + "]";
    }


}