import { Headings } from "@Components/LeftSidebar/Headings";
import { MdHome } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";
import {LeftSidebarFooter} from "./LeftSidebarFooter"
export const LeftSidebar = () => {
  return (
    <div className="flex-3/10 flex flex-col place-content-between">
      <div className="text-textPrimary flex flex-col">
        <h2 className="text-2xl font-black m-5 ">.studio</h2>
        <Headings Icon={<MdHome />} Title="Overview" />
        <Headings Icon={<BsFillBarChartFill />} Title="Stats" />
        <Headings Icon={<BsFolder />} Title="Projects" />
        <Headings Icon={<BsChat />} Title="Chat" />
        <Headings Icon={<BsCalendar />} Title="Calendar" />
      </div>
      <div className="text-textPrimary flex flex-col">
        <LeftSidebarFooter/>
      </div>
    </div>
  );
};
