import { screen, render } from "@testing-library/react";
import WeatherInfo from "../components/WeatherInfo";
import { mock } from "../__MOCK__/openweathermap";

it("should display the right labels", () => {
  const speed = (mock.wind.speed * 18) / 5;
  render(<WeatherInfo data={mock} />);

  expect(screen.queryByText(mock.name)).toBeInTheDocument();
  expect(
    screen.queryByText(`Umidade: ${mock.main.humidity}%`)
  ).toBeInTheDocument();
  expect(
    screen.queryByText(`min: ${mock.main.temp_min.toFixed(0)}°C`)
  ).toBeInTheDocument();
  expect(
    screen.queryByText(`max: ${mock.main.temp_max.toFixed(0)}°C`)
  ).toBeInTheDocument();
  expect(screen.queryByText(`Vento: ${speed.toFixed(2)}km/h`)).toBeInTheDocument();
});
