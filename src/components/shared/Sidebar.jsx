// import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";


const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 text-neutral-200";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white ">
      <div className="flex items-center gap-2 px-1 py-3">
      <IoIosLogOut fontSize={24} />
        {/* <FcBullish fontSize={24} /> */}
        <span className="text-neutral-100 text-lg">OpenShop</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className={classNames(linkClasses, "cursor-pointer text-red-500")}>
        <span className="text-xl">
          <HiOutlineLogout />
        </span>
        Logout
      </div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { p } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        p === item.path ? "bg-neutral-700" : "",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

SidebarLink.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
  }).isRequired,
};

export default Sidebar;
