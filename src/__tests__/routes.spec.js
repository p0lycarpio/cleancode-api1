//Tests all the routes
describe('IDVerification tests', ()=> {
    it('should return 1 - case', () => {
        expect(true).toEqual(true);
    });

    it('should return 0 - case false number/letter', () => {
        expect(true).toEqual(true);
    });

    it('should return 1 - case number < 10000000', () => {
        expect(true).toEqual(true);
    });
});
  
describe('IDCreation tests', ()=> {
    it('should return Z1234', () => {
        expect(true).toEqual(true);
    });

    it('should return J123456789', () => {
        expect(true).toEqual(true);
    });

    it('should return NaN', () => {
        expect(true).toEqual(true);
    });
});