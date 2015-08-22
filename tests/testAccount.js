/**
 * Created by jan on 20/10/14.
 */
describe('Account', function(){

    var owner = (new OwnerGenerator()).generateOwner();
    var a = new Account(owner, 100);


    it('should have an owner', function(){
        expect(a.getOwner()).toBeDefined();
    });

    it('should be visible after creation', function(){
        expect(a.isActive()).toBeTruthy();
    });

    it('should be NOT visible after calling deactivate()', function(){
        a.deactivate();
        expect(a.isActive()).toBeFalsy();
    });

    it('should add Amount to the account', function(){
        var currentAmount = a.getBalance();
        var amount = 500;
        var expectedAmount = currentAmount + amount;
        a.add(amount);

        expect(a.getBalance()).toBe(expectedAmount);
    });

    it('should withdraw Amount which is NOT greater then balance', function(){
        var currentAmount = a.getBalance();
        var amount1 = currentAmount + 1;
        var amount2 = 50;
        var expectedAmount = currentAmount - amount2;
        expect(a.withdraw(amount1)).toBeFalsy();
        expect(a.getBalance()).toBe(currentAmount);

        expect(a.withdraw(amount2)).toBeTruthy();
        expect(a.getBalance()).toBe(expectedAmount);

    });

});