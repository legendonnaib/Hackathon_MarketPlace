import Image from "next/image";

export default function HomepageResponsive() {
  return (
    <div className="flex flex-col gap-[60px] items-center bg-[#F4F5F7]">
      <div className="w-fit text-center">
        <h2 className="text-Font font-bold text-[32px] sm:text-[28px] md:text-[30px]">Browse The Range</h2>
        <p className="text-Font1 font-normal text-[20px] sm:text-[18px] md:text-[19px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[20px] sm:flex-col md:flex-row">
        {/* Bedroom Category */}
        <div className="w-[381px] sm:w-[320px] md:w-[350px] flex flex-col gap-[30px]">
          <div>
            <Image
              src="/images/bedroom.png"
              alt="image1"
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[24px] sm:text-[20px] md:text-[22px] text-Font">Dining</p>
          </div>
        </div>

        {/* Living Category */}
        <div className="w-[381px] sm:w-[320px] md:w-[350px] flex flex-col gap-[30px]">
          <div>
            <Image
              src="/images/dinning-room.png"
              alt="image2"
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[24px] sm:text-[20px] md:text-[22px] text-Font">Living</p>
          </div>
        </div>

        {/* Bedroom Category */}
        <div className="w-[381px] sm:w-[320px] md:w-[350px] flex flex-col gap-[30px]">
          <div>
            <Image
              src="/images/Image-living room.png"
              alt="image3"
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[24px] sm:text-[20px] md:text-[22px] text-Font">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
