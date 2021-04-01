import { writeDate } from "../utils/writeDate";
import styles from "./WeatherInfo.module.css";

function WeatherInfo({ data }) {
  const { main, wind, weather } = data;
  const desc = weather[0];
  const speed = (wind.speed * 18) / 5;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTemp}>
        <h2 className={styles.cityLabel}>{data.name}</h2>
        <div className={styles.dataLabel}>{writeDate()}</div>
        <img alt='Clima agora'
          src={`http://openweathermap.org/img/wn/${desc.icon}@2x.png`}
          height={100}
        />
        <div className={styles.tempLabel}>{main.temp.toFixed(0)}°C</div>
      </div>
      <div className={styles.tempDesc}>{desc.description}</div>
      <div className={styles.details}>
        <div>min: {main.temp_min.toFixed(0)}°C</div>
        <div>max: {main.temp_max.toFixed(0)}°C</div>
        <div>Umidade: {main.humidity}%</div>
        <div>Vento: {speed.toFixed(2)}km/h</div>
      </div>
    </div>
  );
}

export default WeatherInfo;

