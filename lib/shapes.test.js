const {Circle, Triangle, Square} =  require('./shapes');


describe("Shape", () => {

  describe("Circle", () => {
    it("should return an svg in the form of a circle", () => {
      const circle = new Circle("white", "Diz","black")
      expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Diz</text></svg>`)
    })
  })

  describe("Triangle", () => {
    it("should return an svg in the form of a triangle", () => {
      const triangle = new Triangle("white", "Diz","black")
      expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Diz</text></svg>`)
    })
  })

  describe("Square", () => {
    it("should return an svg in the form of a circle", () => {
      const square = new Square("white", "Diz","black")
      expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Diz</text></svg>`)
    })
  })

})