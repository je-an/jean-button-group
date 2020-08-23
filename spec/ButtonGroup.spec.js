// jscs:disable
// jshint ignore:start
define([
    "ButtonGroup"
], function (ButtonGroup) {
    describe('ButtonGroup.spec.js', function () {
        var instance;
        beforeEach(function () {
            instance = new ButtonGroup();
        });
        describe("ButtonGroup", function () {
            it("TODO: Check if all members are available | EXPECTATION: ButtonGroup has all necessary members", function () {
                var numberOfMembers = 0;
                expect(Object.keys(instance).length).toEqual(numberOfMembers);
            });
            it("TODO: Check if all methods are available | EXPECTATION: ButtonGroup has all necessary methods", function () {
                var numberOfMethods = 0;
                var methodCount = Object.keys(Object.getPrototypeOf(instance)).length;
                expect(methodCount).toEqual(numberOfMethods);
            });
        });
    });
});

