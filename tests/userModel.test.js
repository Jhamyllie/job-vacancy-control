const userModel = require("../src/models/userModel");

const userMock = new userModel({
  "name": "Test",
	"email": "test@test.com",
	"password": "test1234",
	"phone": 1234567890
});

describe("CREATE router test", () => {
	it("Must create a new user person in the database", () => {
		userMock.save().then((data) => {
			expect(data.name).toBe("userModel");
		});
	});
});