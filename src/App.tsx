import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import ConnectWalletPage from "./pages/ConnectWalletPage";

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");
  return (
    <div className="flex">
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab ==='home' && <HomePage />}
      {currentTab ==='connectWallet' && <ConnectWalletPage />}
    </div>
  );
};

export default App;
