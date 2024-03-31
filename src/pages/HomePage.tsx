import PopulationGraph from "../components/PopulationGraph";
import CryptocurrencyCard from "../components/CryptocurrencyCard";
import ConnectWallet from "../components/ConnectWallet";

const HomePage = () => {
  return (
    <div className="w-full bg-[#0b0b0b] text-white p-6">
      <p className="text-2xl font-semibold">Hello , User</p>
      <p className="text-xl font-semibold">
        Welcome to <span className="text-primary">Spot Trading!</span>
      </p>
      <PopulationGraph />
      <CryptocurrencyCard />
      <ConnectWallet />
    </div>
  );
};

export default HomePage;
