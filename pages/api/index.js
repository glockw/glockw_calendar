import axios from "axios";

const API =
  "http://api.openweathermap.org/data/2.5/forecast?q={city}&exclude=current,minutely,hourly&appid=9de243494c0b295cca9337e1e96b00e2";

export async function getWeather(date, city) {
  try {
    const response = await axios.get(API.replace("{city}", city));
    const { data } = response;

    const prependIf = (val) => (val < 10 ? `0${val}` : `${val}`);
    const day = prependIf(date.getDate());
    const month = prependIf(date.getMonth() + 1);

    const year = date.getFullYear();

    const coll = data.list.map((s) => {
      return {
        id: s["dt_txt"],
        main: s.weather[0].main,
      };
    });

    const reminderDate = `${year}-${month}-${day}`;

    const [ret] = coll.filter((r) => r.id.indexOf(reminderDate) >= 0);
    return ret.main;
  } catch (error) {
    return null;
  }
}
