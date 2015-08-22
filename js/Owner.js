/**
 * Created by jan on 20/10/14.
 */

function Owner(firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
}

Owner.prototype.toString = function () {
    return this.firstName + ' ' + this.lastName;
}
