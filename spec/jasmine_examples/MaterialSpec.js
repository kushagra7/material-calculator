let material = 'playstation 5';

describe('Get Material',() => {
  it("should be a string",() => {
    expect(material).toBe('playstation 5');
  })
})

let cost = 500;

describe('Get Cost',() => {
  it("should be an integer",() => {
    cost = parseInt(cost);
    expect(cost).toBe(500);
  })
})

