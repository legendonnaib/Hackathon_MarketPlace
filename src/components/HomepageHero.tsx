export default function Hero() {
    return (
      <div
        className="flex justify-end items-center w-full sm:w-[80%] md:w-[80%] lg:w-[60%] xl:w-[45%] h-auto bg-no-repeat bg-center bg-cover bg-[#F4F5F7]"
        style={{
          backgroundImage: `url("/images/bg.png")`,
        }}
      >
        <div className="bg-[#FFF3E3] flex gap-[30px] flex-col w-full sm:w-fit mr-[20px] sm:mr-[58px] rounded-[10px] pl-[20px] sm:pl-[39px] pr-[20px] sm:pr-[43px] pt-[30px] sm:pt-[62px] pb-[20px] sm:pb-[37px]">
          <div>
            <h3 className="text-[#333333] text-[14px] sm:text-[16px] font-semibold">
              New Arrival
            </h3>
            <h2 className="text-primary text-[32px] sm:text-[52px] font-bold leading-[45px] sm:leading-[65px] mb-[10px] sm:mb-[17px]">
              Discover Our <br />New Collection
            </h2>
            <p className="font-medium text-[14px] sm:text-[18px] text-[#333333] leading-[20px] sm:leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
              elit tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <div className="bg-primary px-[40px] sm:px-[72px] py-[15px] sm:py-[25px] w-fit">
            <p className="text-white font-bold text-[14px] sm:text-[16px]">BUY NOW</p>
          </div>
        </div>
      </div>
    );
  }
  