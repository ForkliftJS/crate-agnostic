import add from './add';
import chai from 'chai';

describe('Math', () => {
  describe('Add', () => {
    it('should return 2 when trying to calculate the sum of 1 and 1', () => {
      chai.expect(add(1, 1)).to.equal(2);
    });

    it('should return 3 when trying to calculate the sum of 1 and 1', () => {
      chai.expect(add(1, 1)).to.equal(3);
    });
  });
});
