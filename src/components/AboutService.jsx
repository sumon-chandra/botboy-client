import {CiFaceSmile, CiDiscount1} from "react-icons/ci"
import {BiSupport} from "react-icons/bi"
import {GiReceiveMoney} from "react-icons/gi"
const AboutService = () => {
  return (
    <div className="lg:flex justify-between w-full bg-indigo-100 px-4 lg:px-20 py-10">
      <div className="flex items-center lg:mb-0 mb-3 lg:justify-start lg:gap-3 lg:py-0 justify-center gap-6 py-4 lg:border-0 border border-mainColor rounded-md text-mainColor">
        <CiFaceSmile className="text-7xl" />
        <div>
            <p className="text-xl font-semibold">100% Satisfaction</p>
            <p className="text-gray-500">If You Are Unable</p>
        </div>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="flex items-center lg:mb-0 mb-3 lg:justify-start lg:gap-3 lg:py-0 justify-center gap-6 py-4 lg:border-0 border border-mainColor rounded-md text-mainColor">
        <BiSupport className="text-7xl" />
        <div>
            <p className="text-xl font-semibold">Online Support</p>
            <p className="text-gray-500">Any Time Support</p>
        </div>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="flex items-center lg:mb-0 mb-3 lg:justify-start lg:gap-3 lg:py-0 justify-center gap-6 py-4 lg:border-0 border border-mainColor rounded-md text-mainColor">
        <GiReceiveMoney className="text-7xl" />
        <div>
            <p className="text-xl font-semibold">Money Returns</p>
            <p className="text-gray-500">Back Guarantee In 7 Days</p>
        </div>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="flex items-center lg:mb-0 mb-3 lg:justify-start lg:gap-3 lg:py-0 justify-center gap-6 py-4 lg:border-0 border border-mainColor rounded-md text-mainColor">
        <CiDiscount1 className="text-7xl" />
        <div>
            <p className="text-xl font-semibold">Member Discount</p>
            <p className="text-gray-500">On Customer's First Order</p>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
