const Styles = {
    header: "overflow-hidden flex justify-between items-center w-full h-24 p-8 sm:p-4 text-white",
    headerWhite: "overflow-hidden flex justify-between items-center w-full h-24 p-8 sm:p-4 text-black bg-gray-100 fixed top-0 left-0 z-10 transition-all ease-in-out duration-1000 z-10",
    flexCenter: "flex justify-center items-center",
    flexBetween: "flex justify-between items-center ",
    sideBar : "invisible sm:w-70 w-full h-full bg-white fixed top-0 right-0 text-black opacity-0  translate-x-30",
    sideBarActive: "visible sm:w-70 w-full h-full bg-[#343877] fixed top-0 right-0 text-white transition-all duration-500 ease-in-out translate-x-0 flex flex-col items-center gap-5",
    sideBarLi:"w-full py-2 text-center hover:bg-white hover:text-black transition-all duration-300 ease-in-out",
    whatWeDoLi: "bg-cover bg-center h-[300px] sm:h-[400px] flex flex-col justify-end overflow-hidden",
    whatWeDoLink: "w-fit h-fit p-4 bg-white hover:translate-x-3 transition-all duration-300 ease-in-out",
    futureProjectLi: "py-6 px-5 bg-white shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out",
    aboutUsCounter: "w-15 h-15 p-2 bg-amber-400 rounded-full flex items-center justify-center",
    galleryActive: "w-full h-full bg-blue-500/50 transition-all duration-500 ease-in-out",
    galleryHidden: "w-full h-full bg-blue-500/50 -translate-x-[100%] transition-all duration-500 ease-in-out",
    eventsArrow: "p-4 border-2 border-[#343877] rounded-full cursor-pointer hover:bg-[#343877] hover:text-white transition-all duration-300 ease-in-out",
    eventsPageNum: "px-4 py-2 border-2 border-[#343877] rounded-full hover:bg-[#343877] hover:text-white transition-all duration-300 ease-in-out",
    eventsPageNumActive: "px-5 py-3 bg-[#343877] rounded-full text-white",
}


export default Styles