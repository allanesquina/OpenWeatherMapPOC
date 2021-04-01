import { mock } from "../__MOCK__/openweathermap";
import { OWMService } from "./Openweathermap";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mock),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

it("should get data from API", async () => {
  const data = await OWMService.getWeatherByGeoCoord({
    latitude: 123,
    longitude: 123,
  });
  expect(data).toEqual(mock);
});
