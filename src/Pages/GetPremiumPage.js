import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Sample3() {
  const URL = "https://urldb-backend.vercel.app";
  const history = useNavigate();
  const token = document.cookie;
  async function planselectedhandler(){
    document.getElementById("submitButton").innerHTML = "Wait...";
      document.getElementById("submitButton").style.backgroundColor = "#4b5563";
    try {
      axios.post(`${URL}/api/update_to_premium`,{
        token
      }).then((res)=>{
        if(res.status==200){

          toast.success("🦄 Upgraded Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "Zoom",
          });

          
            setTimeout(() => {
              
              history("/dashboard");
              window.location.reload();
            }, 600);
        }
      })
    } catch (error) {
      
    }
  }

    return (
      <>
        <div className="relative bg-gray-400 ">
        
          <img
            src="https://www.tailwindtap.com/assets/components/pricing/flexible-pricing/office.jpg"
            alt="background image for highlight pricing component in full screen "
            className="w-full h-screen object-cover hidden lg:inline-block opacity-50"
          />
            
          <container className="mt-14 bg-gray-300 font-sans lg:bg-transparent flex flex-col lg:flex-row absolute justify-center lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 px-5 xl:px-0 py-8 lg:py-0 w-full gap-6 items-center lg:items-stretch">
            {/* first portion */}
            
            <div
              className="flex flex-col flex-wrap max-w-[360px] md:w-[384px] min-h-[572px] p-6 bg-[#365CCE] group rounded-2xl relative overflow-hidden"
            >
            
              <div className="text-start text-white">
                <span className="font-light text-3xl ">Be Fast</span>
                <br />
                <span className="font-bold text-3xl">With Premium</span>
                <br />
                <div className="text-lg leading-7">
                  Choose a plan and get onboard in minutes.
                </div>
                <RightArrow />
              </div>
              <div className="absolute bottom-0 h-[300px]">
                <img
                  src="https://freepngimg.com/thumb/girl/168680-woman-young-free-clipart-hd.png"
                  alt="girl image for promot pricing plan"
                />
              </div>
            </div>
            {/* middle portion  */}
            {staticValue.map((data, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[360px] md:w-[384px] min-h-[518px] md:min-h-[572px] p-6 bg-white group rounded-2xl border xl:border-none border-[#0B0641] relative"
              >
                <div className="flex flex-row gap-5 items-center">
                  <span>{data.image}</span>
                  <span className="text-3xl font-bold">{data.passType}</span>
                </div>
                <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
                  What You&apos;ll Get
                </span>
                {data.static.map((myData, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-3 items-start mt-6 text-left text-lg"
                  >
                    <div className="pt-1 shrink-0 ">
                      <RightIcon />
                    </div>
                    <span>{myData}</span>
                  </div>
                ))}
                <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
                <div className="h-28 ">
                  <div className="flex flex-col gap-4 justify-between absolute left-6 right-6 bottom-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold ">{data.price}</span>
                      <span>{data.duration}</span>
                    </div>
                    <div className="flex align-bottom">
                      <button
                      id="submitButton"
                      onClick={()=>{planselectedhandler()}}
                        className="w-full rounded-xl font-semibold text-xl px-4 py-3 bg-[#365CCE] text-white"
                      >
                        Choose
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
          </container>
          <ToastContainer />
        </div>
      </>
    );
  }
  const DayPassIcon = () => (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.3333 17C30.3333 13.4638 28.9286 10.0724 26.4281 7.57189C23.9276 5.0714 20.5362 3.66665 17 3.66665C13.4638 3.66665 10.0724 5.0714 7.57189 7.57189C5.0714 10.0724 3.66665 13.4638 3.66665 17V23.6666H8.66665C9.10867 23.6666 9.5326 23.8422 9.84516 24.1548C10.1577 24.4674 10.3333 24.8913 10.3333 25.3333V30.3333H23.6666V25.3333C23.6666 24.8913 23.8422 24.4674 24.1548 24.1548C24.4674 23.8422 24.8913 23.6666 25.3333 23.6666H30.3333V17ZM27 27V32C27 32.442 26.8244 32.8659 26.5118 33.1785C26.1993 33.4911 25.7753 33.6666 25.3333 33.6666H8.66665C8.22462 33.6666 7.8007 33.4911 7.48814 33.1785C7.17558 32.8659 6.99998 32.442 6.99998 32V27H1.99998C1.55795 27 1.13403 26.8244 0.821468 26.5118C0.508908 26.1993 0.333313 25.7753 0.333313 25.3333V17C0.333313 7.79498 7.79498 0.333313 17 0.333313C26.205 0.333313 33.6666 7.79498 33.6666 17V25.3333C33.6666 25.7753 33.4911 26.1993 33.1785 26.5118C32.8659 26.8244 32.442 27 32 27H27ZM9.49998 20.3333C9.17168 20.3333 8.84659 20.2687 8.54327 20.143C8.23996 20.0174 7.96436 19.8332 7.73221 19.6011C7.50007 19.3689 7.31592 19.0933 7.19028 18.79C7.06464 18.4867 6.99998 18.1616 6.99998 17.8333C6.99998 17.505 7.06464 17.1799 7.19028 16.8766C7.31592 16.5733 7.50007 16.2977 7.73221 16.0655C7.96436 15.8334 8.23996 15.6493 8.54327 15.5236C8.84659 15.398 9.17168 15.3333 9.49998 15.3333C10.163 15.3333 10.7989 15.5967 11.2677 16.0655C11.7366 16.5344 12 17.1703 12 17.8333C12 18.4964 11.7366 19.1322 11.2677 19.6011C10.7989 20.0699 10.163 20.3333 9.49998 20.3333ZM24.5 20.3333C24.1717 20.3333 23.8466 20.2687 23.5433 20.143C23.24 20.0174 22.9644 19.8332 22.7322 19.6011C22.5001 19.3689 22.3159 19.0933 22.1903 18.79C22.0646 18.4867 22 18.1616 22 17.8333C22 17.505 22.0646 17.1799 22.1903 16.8766C22.3159 16.5733 22.5001 16.2977 22.7322 16.0655C22.9644 15.8334 23.24 15.6493 23.5433 15.5236C23.8466 15.398 24.1717 15.3333 24.5 15.3333C25.163 15.3333 25.7989 15.5967 26.2677 16.0655C26.7366 16.5344 27 17.1703 27 17.8333C27 18.4964 26.7366 19.1322 26.2677 19.6011C25.7989 20.0699 25.163 20.3333 24.5 20.3333Z"
        fill="#0B0914"
      />
    </svg>
  );
  const MonthPassIcon = () => (
    <svg
      width="30"
      height="35"
      viewBox="0 0 30 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0.333313C18.7572 0.333313 22.3606 1.82587 25.0173 4.48263C27.6741 7.1394 29.1667 10.7427 29.1667 14.5C29.1667 25.3333 20 34.5 15 34.5C10 34.5 0.833328 25.3333 0.833328 14.5C0.833328 10.7427 2.32588 7.1394 4.98265 4.48263C7.63942 1.82587 11.2428 0.333313 15 0.333313ZM15 3.66665C12.1268 3.66665 9.37132 4.80801 7.33967 6.83966C5.30803 8.8713 4.16666 11.6268 4.16666 14.5C4.16666 22.49 11.1083 31.1666 15 31.1666C18.8917 31.1666 25.8333 22.49 25.8333 14.5C25.8333 11.6268 24.692 8.8713 22.6603 6.83966C20.6287 4.80801 17.8732 3.66665 15 3.66665ZM24.1667 15.3333C24.4333 15.3333 24.6983 15.3466 24.9583 15.375C25.0764 16.4873 24.9442 17.612 24.5714 18.6667C24.1986 19.7213 23.5945 20.6792 22.8036 21.4702C22.0126 22.2612 21.0547 22.8652 20 23.2381C18.9454 23.6109 17.8207 23.7431 16.7083 23.625C16.5973 22.5791 16.7075 21.5216 17.0317 20.5212C17.356 19.5207 17.887 18.5996 18.5903 17.8176C19.2937 17.0357 20.1536 16.4104 21.1143 15.9824C22.075 15.5544 23.115 15.3333 24.1667 15.3333ZM5.83333 15.3333C6.88504 15.3333 7.92501 15.5544 8.8857 15.9824C9.84638 16.4104 10.7063 17.0357 11.4097 17.8176C12.113 18.5996 12.644 19.5207 12.9683 20.5212C13.2925 21.5216 13.4027 22.5791 13.2917 23.625C12.1793 23.7431 11.0546 23.6109 9.99996 23.2381C8.94531 22.8652 7.98741 22.2612 7.19643 21.4702C6.40546 20.6792 5.80143 19.7213 5.42859 18.6667C5.05575 17.612 4.92355 16.4873 5.04166 15.375C5.3 15.3466 5.56666 15.3333 5.83333 15.3333Z"
        fill="#0B0914"
      />
    </svg>
  );
  const RightArrow = () => (
    <svg
      className="mt-5"
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9187 12.7757L13.1821 3.03919L15.7488 0.472548L29.8671 14.5909L15.7488 28.7092L13.1821 26.1426L22.9187 16.406H0.824509V12.7757H22.9187Z"
        fill="white"
      />
    </svg>
  );
  const RightIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 0.00012207C4.48608 0.00012207 7.62939e-05 4.48612 7.62939e-05 10.0001C7.62939e-05 15.5141 4.48608 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48612 15.5141 0.00012207 10.0001 0.00012207ZM8.00108 14.4131L4.28808 10.7081L5.70008 9.29212L7.99908 11.5871L13.2931 6.29312L14.7071 7.70712L8.00108 14.4131Z"
        fill="#35353F"
      />
    </svg>
  );
  const staticValue = [
    {
      passType: "Monthly Pass",
      price: "Rs 499",
      image: <DayPassIcon />,
      duration: "Rs 499/month",
      static: [
        "No more Error 429 of Too Many Reuests",
        "Unlimited Reuests and faster Response",
        "24/7 support",
        "Preffered System Support",
      ],
    },
    {
      passType: "Month Pass",
      price: "Rs 4599",
      image: <MonthPassIcon />,
      duration: "Rs 383/month",
      static: [
        "No more Error 429 of Too Many Reuests",
        "Unlimited Reuests and faster Response",
        "24/7 support",
        "Preffered System Support",
      ],
    },
  ];
  