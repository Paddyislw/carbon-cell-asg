import { ArrowRightLeft } from "lucide-react";
import { useGetCryptocurrencyPrices } from "../api";

const CryptocurrencyCard = () => {
  const { data, isSuccess, isError, isFetching, isLoading } =
    useGetCryptocurrencyPrices();

  return (
    <div className="my-6">
      <p className="text-lg font-semibold">Cryptocurrency Prices</p>
      {isError && <p>Something went wrong in fetching Cryptocurrency data</p>}
      {(isFetching || isLoading) && (
        <div className="w-10 h-10 border-t-primary border-4 rounded-full animate-spin my-3"></div>
      )}
      {isSuccess && (
        <div>
          <p>
            <span className="text-primary font-semibold">Time Updated :</span>{" "}
            {new Date(data?.time.updated).toLocaleDateString()}{" "}
            {new Date(data?.time.updated).toLocaleTimeString()}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {Object.keys(data?.bpi).map((item, index) => {
              const currentObj = data?.bpi?.[item];
              return (
                <div
                  key={index}
                  className="bg-[#171717] p-4 rounded-lg w-[250px] space-y-3"
                >
                  <p
                    dangerouslySetInnerHTML={{ __html: currentObj.symbol }}
                    className="text-primary bg-[#333333] w-12 h-12 text-2xl font-bold flex justify-center items-center pb-1 rounded-full"
                  />
                  <p className="text-lg font-semibold">
                    {currentObj?.description}
                  </p>
                  {/* <p>Rate: {currentObj?.rate}</p> */}
                  <div className="flex gap-2 items-center">
                    <p className="bg-[#333333] px-3 rounded py-1">1 BTC</p>
                    <ArrowRightLeft className="w-5 text-primary" />
                    <p className="bg-[#333333] px-3 rounded py-1">
                      <span
                        dangerouslySetInnerHTML={{ __html: currentObj.symbol }}
                        className="font-semibold"
                      />{" "}
                      {currentObj?.rate}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <p>
                      Symbol:{" "}
                      <span
                        dangerouslySetInnerHTML={{ __html: currentObj.symbol }}
                        className="text-primary font-semibold"
                      />
                    </p>
                    <p className="bg-primary w-fit px-2 py-1 rounded">
                      {currentObj?.code}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptocurrencyCard;
