/**
 * Created by jan on 20/10/14.
 */

describe('Owner', function(){

    var o = new Owner("Janko", "Panko");

    it('toString should return firstName with lastName with " " in between', function(){
        expect(o.toString()).toBe("Janko Panko");
    });



});