export default function Options({ data }) {
  return data.map((s, index) => <option value={s} key={`opt__${index}`} />);
}
