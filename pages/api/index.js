import axios from "axios";

const API =
  "http://api.openweathermap.org/data/2.5/forecast?q={city}&exclude=current,minutely,hourly&appid=9de243494c0b295cca9337e1e96b00e2";

export async function getWeather(date, city) {
  const _date = new Date(date);
  try {
    const response = await axios.get(API.replace("{city}", city));
    const { data } = response;

    const prependIf = (val) => (val < 10 ? `0${val}` : `${val}`);
    const day = prependIf(_date.getDate());
    const month = prependIf(_date.getMonth() + 1);

    const year = _date.getFullYear();

    const coll = data.list.map((s) => {
      return {
        id: s["dt_txt"],
        main: s.weather[0].main,
      };
    });

    const reminderDate = `${year}-${month}-${day}`;
    const [ret] = coll.filter((r) => r.id.indexOf(reminderDate) >= 0);
    if (!ret) return null;
    return ret.main;
  } catch (error) {
    console.log(error);
    return null;
  }
}
