const request = require('supertest');
const server = require('../server/index');
const mockResponse = require('../server/mockAPI');

describe('POST /test', () => {
    it('responds with json', function(done) {
      request(server)
        .get('/test')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).toEqual(mockResponse);
          if (err) return done(err);
          done();
        });
    });
  });
