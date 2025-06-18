import AppFooter from "@/components/footer/app.footer";
import MainSlider from "@/components/main/main.slider";
import { sendRequestJS } from "@/ultils/api";

export default async function HomePage() {
  // const res = await fetch("http://localhost:8000/api/v1/tracks/top", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     category: "CHILL",
  //     limit: 10,
  //   }),
  // });
  // console.log("check fetch data", await res.json());
  const res = await sendRequestJS<IBackendRes<ItrackTop[]>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/tracks/top`,
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  });
  console.log("check res", res.data);
  return (
    <>
      <div>
        <MainSlider data={res?.data ?? []} />
        <AppFooter />
      </div>
    </>
  );
}
