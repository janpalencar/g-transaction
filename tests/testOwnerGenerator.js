/**
 * Created by jan on 20/10/14.
 */
describe('OwnerGenerator', function(){


    var listOfExistingOwners = function() { return [new Owner("Jan", "Peterson"), new Owner("Peter", "Woods")]; };
    var s = new OwnerGenerator(listOfExistingOwners);
    var generatedOwner = s.generateOwner();

    it('prints generated owner [' + generatedOwner + ']', function(){});

    it('should generate random firstName, lastName combination given a list of owners', function(){
        expect(listOfExistingOwners()).not.toContain(generatedOwner);
    });


});