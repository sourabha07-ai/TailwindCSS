
import ProfileCard from "./components/ProfileCard";
import ColorPalette from "./components/ColorPalette";

const Handle_color_app = () => {
   return (
    <div className="min-h-screen">
      <div className="max-w-md mx-auto py-16 px-8 cursor-pointer">
        <ProfileCard />
        <ColorPalette />
      </div>
    </div>
  );
}

export default Handle_color_app
