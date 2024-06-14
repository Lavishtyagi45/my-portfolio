import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import I1 from "./Images/Frame1.png";

export default function AsideNav({ nav, handleNav }) {
  return (
    <aside
      className={
        !nav
          ? "fixed top-0 left-[-50%] ease-linear duration-700 z-10 h-full"
          : "fixed top-0 left-[0%] ease-linear duration-700 z-10 h-full"
      }
    >
      <ul className="z-10 w-1/2 overflow-y-auto touch-pan-y font-semibold items-center text-center text-blue-600 bg-blue-500 text-xs sm:text-sm" id="nav">
        <div onClick={handleNav} className="cursor-pointer flex md:hidden z-10 text-white">
          <AiOutlineClose size={24} />
        </div>
        <li className="text-black w-3/4 m-auto">
          <img src={I1} alt="..." className="my-2 mx-auto w-full" />
          <h2 className="sm:text-lg text-normal font-semibold">Lavish Tyagi</h2>
          <p>Student | Front-end Developer</p>
        </li>
        <ul className="my-6 py-6 bg-white w-4/5 mx-auto rounded">
          <NavItem href="#Home" handleNav={handleNav} icon={<HomeIcon />} text="Home" />
          <NavItem href="#About" handleNav={handleNav} icon={<AboutIcon />} text="About Me" />
          <NavItem href="#Education" handleNav={handleNav} icon={<EducationIcon />} text="Education" />
          <NavItem href="#Skills" handleNav={handleNav} icon={<SkillsIcon />} text="Skills" />
          <NavItem href="#Projects" handleNav={handleNav} icon={<ProjectsIcon />} text="Projects" />
          <NavItem href="#Contact" handleNav={handleNav} icon={<ContactIcon />} text="Contacts" />
        </ul>
        <hr />
        <p className="grid justify-items-center py-5 text-xs font-normal text-white">
          Copyright &copy; 2023 Include | All Rights Reserved
        </p>
      </ul>
    </aside>
  );
}

function NavItem(props){
  return(
      <li className=" cursor-pointer hover:translate-y-1 hover:bg-blue-600 hover:text-white hover:rounded  w-3/4 m-auto py-6">
      <a
        href={props.href}
        className=" grid justify-items-center"
        onClick={props.handleNav}
      >
        {props.icon}
        <p>{props.text}</p>
      </a>
    </li>
  )
}

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}

function SkillsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.114 48.114 0 013.413-.387m0 0V4.5c0-1.19.953-2.25 2.25-2.25h6.75c1.297 0 2.25 1.06 2.25 2.25v1.644m-12 2.5a48.084 48.084 0 009 0"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 7.5l-9.53 4.765a.75.75 0 01-.439.085.75.75 0 01-.439-.085L2.25 7.5m19.5 0v9.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V7.5m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25"
      />
    </svg>
  );
}

