/**
 * Created by jan on 20/10/14.
 */

describe('Transaction', function(){

    var t = new Transaction(null, null, 1);

    it('transaction is not processed after creation', function(){
        expect(t.processed).toBe(false);
    });

    it('should have an >0 amount', function(){
        expect(t.amount).toBeGreaterThan(0);
    });

    it('transaction should be processed after process()', function(){
        t.process();
        expect(t.processed).toBe(true);
    });

    it('transaction should have processed fail && result in error if cannot be processed')

});


