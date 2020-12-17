import { validateURL } from '../client/js/validateURL';

describe('testing submit', () => {
    it('Returns true on valid url', () => {
        expect(validateURL('https://www.youtube.com/')).toBe(true);
    })

    it('Returns false on invalid url', () => {
        expect(validateURL('nope')).toBe(false);
    })
})
