import Navbar from "./Navbar";
import RegisterButton from "./RegisterButton";
import RegisterNotification from "./RegisterNotification";
import CardContainer from "./CardContainer";

export default function GalleryPage() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <CardContainer />
      <RegisterButton />
    </div>
  );
}
