import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import DateComponent from "../../components/DateComponent";
import Layout from "../../components/Layout";

export default function Index() {
  const router = useRouter();
  const { month } = useSelector((state) => state);

  const { id } = router.query;
  const date = month.flat().find((d) => d.id === id);
  if (!date) return <div>Error ...</div>;
  return (
    <Layout>
      <DateComponent date={date} />
    </Layout>
  );
}
