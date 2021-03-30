let material = 'xBox One';

describe('Get Material',() => {
  it("should be a string",() => {
    expect(material).toBe('xBox One');
  })
})

let cost = 700;

describe('Get Cost',() => {
  it("should be an integer",() => {
    cost = parseInt(cost);
    expect(cost).toBe(700);
  })
})

