import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import DateComponent from "../../components/DateComponent";
import Layout from "../../components/Layout";

export default function Index() {
  const router = useRouter();
  const { month, day } = useSelector((state) => state);
  const { id } = router.query;
  let _id = id;
  if (day && id !== day.id) {
    _id = day.id;
  }
  const date = month.flat().find((d) => d.id == _id);

  if (!date) return <div>Error ...</div>;
  return (
    <Layout>
      <DateComponent date={date} />
    </Layout>
  );
}
