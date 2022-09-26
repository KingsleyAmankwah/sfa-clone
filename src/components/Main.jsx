import React from "react";
import img1 from "../images/help1.png";
import img2 from "../images/help2.png";
import img3 from "../images/help3.png";
import img4 from "../images/help4.png";

function Main() {
  return (
    <div>
      <div className="py-32 px-32 italic bg-[url('./images/HS.jpg')] bg-cover h-full w-full">
        <div className="mx-auto md:px-8">
          <div className="grid grid-cols-12 shadow gap-2 w-full">
            <div className="container bg-white text-[#03564e] col-span-12 w-full  xl:col-span-5 px-4 sm:px-16 py-8">
              <h1 className="text-center text-green-900 font-[900] text-[56px] leading-10 tracking-tight">
                Help & Support
              </h1>
              <div className="mt-8">
                <a href="#">
                  <div className="rounded-3xl border grid gap-2 grid-cols-12 overflow-hidden p-4">
                    <div className="col-span-4 rounded">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-span-8">
                      <h2 className="text-2xl font-black leading-5 sm:leading-6">
                        Schedule a call
                      </h2>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="rounded-3xl border grid gap-2 grid-cols-12 overflow-hidden p-4">
                    <div className="col-span-4 rounded">
                      <img src={img2} alt="" />
                    </div>
                    <div className="col-span-8">
                      <h2 className="text-2xl font-black leading-5 sm:leading-6">
                        Start a live chat
                      </h2>
                    </div>
                  </div>
                </a>

                <a href="#">
                  <div className="rounded-3xl border grid gap-2 grid-cols-12 overflow-hidden p-4">
                    <div className="col-span-4 rounded">
                      <img src={img3} alt="" />
                    </div>
                    <div className="col-span-8">
                      <h2 className="text-2xl font-black leading-5 sm:leading-6">
                        Subscribe to Newsletter
                      </h2>
                    </div>
                  </div>
                </a>

                <a href="#">
                  <div className="rounded-3xl border grid gap-2 grid-cols-12 overflow-hidden p-4">
                    <div className="col-span-4 rounded">
                      <img src={img4} alt="" />
                    </div>
                    <div className="col-span-8">
                      <h2 className="text-2xl font-black leading-5 sm:leading-6">
                        Policies & service Terms
                      </h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-green-200 col-span-12 xl:col-span-7 px-4 py-16 sm:px-12 md:px-16">
              <h1 className="text-xl leading-4 text-green-900 font-black tracking-tight">
                Frequently Asked Questions
              </h1>

              <div className="mt-8 overflow-y-scroll overflow-x-hidden pr-2 h-[600px]">
                <div className="bg-white mb-6">
                  <div className="px-10 py-4">
                    <h2 className="font-bold">
                      What is the application process like?
                    </h2>

                    <div className="text-base">
                      First, you must choose your track and apply here on the
                      ReadyforWork website. You are advised to set a block of
                      time for the assessment, which takes about 60 minutes. We
                      will invite you for an onboarding interview if you pass
                      the summative assessment. If you live in Ghana, that'll be
                      a face-to-face interview. If you live outside of Ghana,
                      you can join via Zoom. After the interview, you will
                      receive our final selection decision.
                    </div>
                  </div>
                </div>
                <div className="bg-white mb-6">
                  <div className="px-10 py-4">
                    <h2 className="font-bold">
                      If I'm selected, what should I expect?
                    </h2>

                    <div className="text-base">
                      Being selected to join ReadyforWork means you will be
                      solving real business challenges. The program is
                      intensive, so you need to plan to commit at least 15 hours
                      weekly to your coursework. You will also need a laptop and
                      stable internet. However, you can always come to our
                      campus and learn from the digital classroom.
                    </div>
                  </div>
                </div>
                <div className="bg-white mb-6">
                  <div className="px-10 py-4">
                    <h2 className="font-bold">
                      If I'm not selected, can I reapply in the future?
                    </h2>

                    <div className="text-base">
                      Yes, you can definitely reapply. We review applications
                      for candidates' suitability for our program, so we often
                      accept
                    </div>
                  </div>
                </div>
                <div className="bg-white mb-6">
                  <div className="px-10 py-4">
                    <h2 className="font-bold">
                      How long does the ReadyforWork Career Accelerator last?
                    </h2>

                    <div className="text-base">
                      Cumulatively, the RFWCA program lasts for six weeks. After
                      the six weeks of intensive career coaching bootcamp, we
                      open up the platform for our employer partners to connect
                      with leaders that meet their criteria for jobs,
                      internships, contract gigs, etc
                    </div>
                  </div>
                </div>
                <div className="bg-white mb-6">
                  <div className="px-10 py-4">
                    <h2 className="font-bold">
                      Will I get a job after participating in the ReadyforWork
                      Career Accelerator?
                    </h2>

                    <div className="text-base">
                      We partner with corporates and high-growth startups to
                      curate the RFW accelerator. After the six-week intensive
                      bootcamp, our industry partners provide RFW leaders with
                      paid internship,job or apprentice opportunities. While we
                      provide these opportunities to all ReadyforWork leaders,
                      we can not guarantee who gets a slot, as the program is
                      competitive and merit-based.
                    </div>
                  </div>
                </div>
                <div className="bg-white mb-6">
                  <div className="px-10 py-4">
                    <h2 className="font-bold">
                      How much does the ReadyforWork Career Accelerator program
                      cost?
                    </h2>

                    <div className="text-base">
                      The total cost of participating in the RFWCA is ¢2,500.
                      This fee is payable upon securing a job placement. Even at
                      that, we also have payment plans to ensure that
                      reimbursement is not a burden on your earning. If a
                      candidate does not secure a job interview within six
                      months of graduating from RFW, then it’s free for life.
                    </div>
                  </div>
                </div>
                <div className="bg-white mb-6">
                  <div className="px-10 py-4">
                    <h2 className="font-bold">
                      Who can apply to participate in the ReadyforWork Career
                      Accelerator?
                    </h2>

                    <div className="text-base">
                      The program is open to high potential University
                      graduates, entry-level job seekers, early-stage career
                      professionals, and folks looking to either change jobs or
                      re-enter the workforce. If you are still in school and
                      wish to join ReadyforWork, you must already be at the tail
                      end of your degree course and available to commit to the
                      program
                    </div>
                  </div>
                </div>
                <div className="bg-white mb-6">
                  <div className="px-10 py-4">
                    <h2 className="font-bold">
                      Will I get a certificate after the program?
                    </h2>

                    <div className="text-base">
                      Most definitely! Leaders that finish the program
                      successfully will receive a certificate of completion and
                      a complementary graphic resume. It is important to note
                      that leaders could be expelled if they breach the RFW Code
                      of Conduct or Privacy Policy. Please only apply if you see
                      the program’s value and are ready to abide by our simple
                      policies.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-10 grid bg-[#46d3a9] grid-cols-2 italic text-[#03564e]">
          <div className="py-20 px-4 col-span-2 md:px-16 md:col-span-1">
            <h3 className="font-black text-xl md:text-4xl leading-5">
              Get education that works
            </h3>
            <p className="my-5 keading-5 lg:h-40">
              We used to learn to do our work, but learning has become the work
              we do today. Set yourself up for success with in-demand digital
              skills that help you stand out in today’s highly competitive job.
              Fast-track your career with valuable insights and coach support
              from industry leaders. Our framework provides a cheaper, leaner,
              and faster way for upskilling.
            </p>

            <a
              href="#"
              className="font-bold py-[0.75rem] rounded-[9999px] px-[2.25rem] text-white bg-[rgba(2,249,128,var(--tw-bg-opacity))]"
            >
              Launch your career
            </a>
          </div>
          <div className="py-20 bg-[#dfffec] text-[#03564e] px-4 col-span-2 md:px-16 md:col-span-1">
            <h3 className="font-black text-xl md:text-4xl leading-5">
              Get better talent
            </h3>
            <p className="my-5 keading-5 lg:h-40">
              Resumes are becoming increasingly unreliable as an instrument for
              matching talents to jobs because many candidates lie on their
              resumes. Make data-driven, skills-based hiring decisions and get
              better results at less than 50% of the cost. Hire the best talent
              across the continent and beyond and create a reliable, top-rated
              talent pipeline at a fraction of the cost.
            </p>

            <a
              href="#"
              className="font-bold py-[0.75rem] px-[2.25rem] rounded-[9999px] text-white bg-[rgba(2,249,128,var(--tw-bg-opacity))]"
            >
              Hire great talents
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
