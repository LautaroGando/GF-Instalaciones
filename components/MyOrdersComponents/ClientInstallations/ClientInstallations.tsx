import React from "react";
import TrackingStep from "./TrackingStep/TrackingStep";

const ClientInstallations = () => {
  return (
    <div>
      <section>
        <h2 className="text-primaryColor text-[24px] text-center sm:text-[28px] md:text-[32px]">
          INSTALACIONES DE LA ORDEN <span className="font-semibold">#4886342</span>
        </h2>

        <div className="mt-[12px] mb-6">
          <p className="text-[14px] text-center text-gray-500 font-medium tracking-[0.1em]">
            INSTALACIONES COMPLETADAS
          </p>

          <div className="relative flex items-center justify-center">
            <div className="w-[300px] mx-auto h-[10px] bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[50%] rounded-full bg-admin-activeColor/70 shadow-admin-active" />
            </div>
            <p className="absolute right-0 text-[12px] text-admin-activeColor font-semibold">
              5/10
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600">
        <div className="border-t-[3px] border-admin-activeColor rounded-[4px] py-6 px-3">
          {/* ID, DIRECCION Y ESTADO*/}
          <div className="flex flex-col">
            <div className="order-2 flex items-center">
              <div className="h-[64px] mt-6">
                <p className="text-xs text-gray-500">ID: 4896314</p>
                <p className=" text-gray-500">Av. Juan B. Justo 9100, Liniers, CABA, 1408</p>
              </div>
            </div>

            <div className="order-1 flex items-center gap-[6px]">
              <div className="size-[16px] bg-admin-activeColor rounded-[50%]"></div>
              <p className="text-admin-activeColor text-[18px] font-semibold">Finalizada</p>
            </div>
          </div>

          {/*SEGUIMIENTO*/}
          <div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col justify-start items-start">
                <TrackingStep label={`Paso ${i + 1}`} date="22/05/2001" />
                <div className="flex justify-center w-[32px]">
                  <div className="w-[3px] h-[30px] bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-[50%] w-full rounded-full bg-admin-activeColor/70 shadow-admin-active" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div></div>
        </div>
      </section>
    </div>
  );
};

export default ClientInstallations;
