const app = require('../../src/app');

describe('\'dashboard\' service', () => {
  it('registered the service', () => {
    const service = app.service('dashboard');
    expect(service).toBeTruthy();
  });
});
