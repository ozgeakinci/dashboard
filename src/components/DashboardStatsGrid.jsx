import PropTypes from "prop-types";
import { IoBagHandle } from "react-icons/io5";

const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full ">
      <BoxWapper>
        <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white"/>
        </div>
        <div className="pl-4">
            <span className="txt-sm text-gray-500 font-light ">Total Sales</span>
            <div className="flex items-center ">
                <strong className="text-xl text-gray-700 font-semibold">$34525.60</strong>
                <strong className="text-sm text-green-500 pl-2">+234</strong>
            </div>
        </div>
      </BoxWapper>
      <BoxWapper>
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white"/>
        </div>
        <div className="pl-4">
            <span className="txt-sm text-gray-500 font-light ">Total Sales</span>
            <div className="flex items-center ">
                <strong className="text-xl text-gray-700 font-semibold">$34525.60</strong>
                <strong className="text-sm text-green-500 pl-2">+234</strong>
            </div>
        </div>
      </BoxWapper>
      <BoxWapper>
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white"/>
        </div>
        <div className="pl-4">
            <span className="txt-sm text-gray-500 font-light ">Total Sales</span>
            <div className="flex items-center ">
                <strong className="text-xl text-gray-700 font-semibold">$34525.60</strong>
                <strong className="text-sm text-green-500 pl-2">+234</strong>
            </div>
        </div>
      </BoxWapper>
      <BoxWapper>
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white"/>
        </div>
        <div className="pl-4">
            <span className="txt-sm text-gray-500 font-light ">Total Sales</span>
            <div className="flex items-center ">
                <strong className="text-xl text-gray-700 font-semibold">$34525.60</strong>
                <strong className="text-sm text-green-500 pl-2">+234</strong>
            </div>
        </div>
      </BoxWapper>
    </div>
  );
};

export default DashboardStatsGrid;

const BoxWapper = ({ children }) => {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
      {children}
    </div>
  );
};

BoxWapper.propTypes = {
  children: PropTypes.any.isRequired,
};
