import { Box, Home, Menu, Search, Wallet } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}

const NavigationBar: React.FC<Props> = ({currentTab,setCurrentTab}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <div
      className={`bg-[#1a1e1c] sticky top-0 h-screen overflow-hidden transition-all duration-300  px-4 py-7 space-y-5 ${
        isSideBarOpen ? "min-w-[240px]" : "w-[60px]"
      }`}
    >
      <div className="flex justify-between">
        <p className={`${isSideBarOpen ? "block" : "hidden"} text-white`}>
          Logo
        </p>
        <Menu
          className="text-white"
          onClick={() => setIsSideBarOpen((prev) => !prev)}
        />
      </div>
      <div
        className={`bg-[#333333] flex space-x-2 relative rounded-lg ${
          isSideBarOpen ? "block" : "hidden"
        }`}
      >
        <Search className="w-4 text-white absolute top-[6px] left-2" />
        <input
          className="bg-[#333333] text-white focus:outline-none pl-6 pr-2 w-full py-2 rounded-lg text-sm"
          placeholder="Search"
        />
      </div>
      <div
        className={`h-6 flex items-center ${
          isSideBarOpen ? "hidden" : "block"
        }`}
      >
        <Search className={`w-4 my-2 text-white`} />
      </div>
      {SideBarItems.map((item) => (
        <div
          key={item.value}
          className="flex items-center space-x-4 cursor-pointer text-sm font-semibold"
          onClick={() => setCurrentTab(item.value)}
        >
          {item.icon(currentTab === item.value)}
          <p
            className={`${
              currentTab === item.value ? "text-primary" : "text-white"
            } ${isSideBarOpen ? "block" : "hidden"}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

const SideBarItems = [
  {
    label: "Home",
    value: "home",
    icon: (isCurrentTab: boolean) => (
      <Home
        className={`w-5 h-5 object-contain ${
          isCurrentTab ? "text-primary" : "text-white"
        }`}
      />
    ),
  },
  {
    label: "Connect Wallet",
    value: "connectWallet",
    icon: (isCurrentTab: boolean) => (
      <Wallet
        className={`w-5 h-5 object-contain ${
          isCurrentTab ? "text-primary" : "text-white"
        }`}
      />
    ),
  },
  {
    label: "Assets",
    value: "assets",
    icon: (isCurrentTab: boolean) => (
      <Box
        className={`w-5 h-5 object-contain ${
          isCurrentTab ? "text-primary" : "text-white"
        }`}
      />
    ),
  },
];

export default NavigationBar;
