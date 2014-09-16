describe('optIn', function() {

    var scope, element, compiled, html;

    beforeEach(module("signupApp"));
    beforeEach(module("opt-in.html"));
    beforeEach(inject(function($rootScope, $compile) {
        html = "<opt-in><div class='brand-logo'></div></opt-in>"

        scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));

    it('should render the signup form correctly', function() {
        expect(element.find('form[name="signupForm"]').length).toBe(1);
        expect(element.find('input').length).toBe(3);
        expect(element.find('input[placeholder="first name"]')).toBeTruthy();
        expect(element.find('input[placeholder="last name"]')).toBeTruthy();
        expect(element.find('input[placeholder="email"]')).toBeTruthy();
        expect(element.find('button').text()).toContain('Give us yr infoz!');
    });
});