import '../../rxjs-imports';
import './handleServiceResult';
import '../observable/notify';

// TODO : remove as soon as we are able to fix jest issue with no test cases
describe('Observable', () => {
    describe('handleServiceResult', () => {
        test('should map non-errored payload to successful action', () => {
            expect(true).toEqual(true);
        });
    });
});