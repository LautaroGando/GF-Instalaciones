import React from "react";

export const Installation: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 mt-[80px] max-h-[calc(100dvh-150px)] overflow-auto">
      <div className="flex flex-col gap-5">
        <div className="w-full flex flex-col md:flex-row md:items-center">
          <div className="w-full h-[40px] text-primaryColor border-b border-primaryColor flex items-center justify-center font-semibold md:border-r md:border-b-0 md:h-[140px] md:w-max md:px-5">
            <h3>PENDIENTE</h3>
          </div>
          <div className="flex flex-col gap-3 px-2 py-4 md:flex-row">
            <div className="flex flex-col gap-3 px-2 py-4">
              <h6 className="text-sm">22-05-2025</h6>
              <div className="flex flex-wrap gap-3">
                <h4 className="font-semibold">
                  ID:{" "}
                  <span className="font-normal">
                    #asd7sdf678s78fd78s6df8dasf
                  </span>
                </h4>
                <h4 className="font-semibold">
                  Dirección:{" "}
                  <span className="font-normal">Av. Juan B. Justo 9100</span>
                </h4>
                <h4 className="font-semibold">
                  Localidad: <span className="font-normal">CABA, Liniers</span>
                </h4>
                <h4 className="font-semibold">
                  CP: <span className="font-normal">1408</span>
                </h4>
              </div>
            </div>
            <button className="w-[120px] h-[36px] border rounded-md border-primaryColor text-primaryColor text-sm font-semibold self-center transition-all duration-300 hover:bg-primaryColor hover:text-letterColorLight md:w-full md:max-w-[170px]">
              LLEGUÉ
            </button>
          </div>
        </div>
        <div className="w-full h-[3px] bg-primaryColor"></div>
      </div>
    </div>
  );
};

export default Installation;
