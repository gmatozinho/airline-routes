const utils = require("../../utils");
const routeController = require("../../controllers/route")
jest.mock("../../utils/file");


describe("Get best route", () => {
    beforeEach(() => {
        utils.file.readFile.mockResolvedValue(`GRU,BRC,10\nBRC,SCL,5`);
    });
    it("success", async () => {

        const [err, res] = await routeController.bestRoute({ origin: 'GRU', destiny: 'BRC' })
        expect(res).toEqual({ 'best-route': 'GRU - BRC > $10' });
    });

    it("fail not pass data", async () => {
        let err, res;
        try {
            [err, res] = await routeController.bestRoute(null)
        } catch (error) {
            err = error
        }
        expect(err).toHaveProperty('message');
    });
});


describe("Create new route", () => {
    beforeEach(() => {
        utils.file.writeLine.mockResolvedValue();
    });
    it("success", async () => {

        const [err, res] = routeController.createRoute({ origin: 'GRU', destiny: 'BRC', price: '10' })
        expect(res).toEqual({ 'insertedLine': 'GRU,BRC,10' });
    });

    it("fail not pass data", async () => {
        let err, res;
        try {
            [err, res] = routeController.createRoute(null)
        } catch (error) {
            err = error
        }
        expect(err).toHaveProperty('message');
    });
});