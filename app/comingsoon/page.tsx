import ComingSoon from "../../components/comingsoon";
import Navbar from "../../components/Navbar";

export default function InactiveTabPage() {
  return <>
  <Navbar />
    <div className="flex items-center text-black justify-center min-h-screen">
      <ComingSoon />
    </div>
  </>;
}
