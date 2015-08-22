/**
 * Created by jan on 20/10/14.
 */

function OwnerGenerator(ownerList) {
    this.FIRST_NAME = ["Jan", "Peter", "Paul", "Hannah", "Julia", "Michael", "Thomas", "Luke", "Jean", "Amy", "Tina"];
    this.LAST_NAME = ["Paulson", "Jackson", "Roberts", "Staunton", "Hamilton", "Berney"];
    this.existingOwners = (ownerList !== undefined) ? ownerList() : [];
}

OwnerGenerator.prototype.generateOwner = function () {
    var rFname = Math.floor(Math.random() * 7);
    var rLname = Math.floor(Math.random() * 7);
    var firstName = this.FIRST_NAME[rFname % this.FIRST_NAME.length];
    var lastName = this.LAST_NAME[rLname % this.LAST_NAME.length];
    var proposedOwner = new Owner(firstName, lastName);

    // If already exists
    if (this.existingOwners.indexOf() != -1) {
        proposedOwner = new Owner(firstName, lastName + '*');
    }

    return proposedOwner;
}