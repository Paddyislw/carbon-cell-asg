import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import AssetPage from "./pages/AssetPage";

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");
  return (
    <div className="flex">
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "home" && <HomePage />}
      {currentTab === "connectWallet" && <ConnectWalletPage />}
      {currentTab === "assets" && <AssetPage />}
    </div>
  );
};

export default App;
