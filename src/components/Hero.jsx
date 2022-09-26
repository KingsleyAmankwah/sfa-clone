import React from "react";
import img from "../images/map.png";

function Hero() {
  return (
    <div>
      <div class="py-28 italic bg-green-50 text-center text-green-900">
        <div class="container mx-auto px-8">
          <div class="md:w-9/12 mx-auto">
            <h1 class="font-[900] text-[56px] leading-10 tracking-tight">
              Customer Service
            </h1>
            <p class="font-montserrat mt-10 text-lg font-normal">
              SFAN partners with corporates, international development agencies,
              governments, charitable foundations, and individuals to unlock the
              potential of young people and create a global community of
              innovators. Our goal is to assemble a critical mass of
              collaborators to drive distinctive, scalable innovation in youth
              employment, entrepreneurship, and education. We believe that
              investment in young people is not only the right thing to do, but
              it is also the smart thing to do, and the time is now!
            </p>
            <a
              href="#"
              class="py-[0.2rem] bg-[rgba(0,201,151,var(--tw-bg-opacity))] mt-8 inline-block font-semibold rounded-full"
            >
              <span class="px-10">Email Us</span>
            </a>
          </div>
        </div>

        <div class="py-20  bg-green-50 text-center text-green-900 font-montserrat">
          <div class="container mx-auto px-8">
            <h1 className="font-[900] md:text-[56px] leading-10 tracking-tight">
              Specific Enquiries
            </h1>
            <div class="grid grid-cols-2 gap-12 justify-center mt-10 md:w-8/12 mx-auto">
              <div class="pt-4 border-t-4 border-green-900 col-span-2 md:col-span-1">
                <h1 class="font-[900] text-[56px]">01</h1>
                <div class="text-left">
                  <h3 class="font-black text-2xl italic font-monserrat">
                    Join Our Cohort
                  </h3>
                  <p class="text-lg">
                    If you’re a high-potential young leader looking to level up
                    and fast-track your career journey, visit our education page
                    or call{" "}
                    <a href="tel:+23303022802935" class="text-rfw-blue">
                      +233 (030) 280 2935.
                    </a>
                  </p>
                  <div className="mt-4 flex justify-center">
                    <a
                      className="font-semibold rounded-[9999px] border-2 py-[0.75rem] px-[2.25rem] border-[rgba(0,201,151,var(--tw-border-opacity))] text-[rgba(0,201,151,var(--tw-text-opacity))]"
                      rel="noreferrer"
                      href="#"
                    >
                      Visit Education Page
                    </a>
                  </div>
                </div>
              </div>
              <div class="pt-4 border-t-4 border-green-900 col-span-2 md:col-span-1">
                <h1 class="font-[900] text-[56px]">02</h1>
                <div class="text-left">
                  <h3 class="font-black text-2xl italic font-monserrat">
                    Hire Bright Talents
                  </h3>
                  <p class="text-lg">
                    Build a team that’s more agile, more self-sufficient, and
                    reduce onboarding time by up to 50% while retaining
                    employees with more than 90% efficiency.
                  </p>
                  <div class="mt-4 flex justify-center">
                    <a
                      className="font-semibold rounded-[9999px] border-2 py-[0.75rem] px-[2.25rem] border-[rgba(0,201,151,var(--tw-border-opacity))] text-[rgba(0,201,151,var(--tw-text-opacity))]"
                      rel="noreferrer"
                      href="#"
                    >
                      Start Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 justify-center mt-10 md:w-8/12 mx-auto">
              <div className="pt-4 border-t-4 border-green-900 col-span-2 md:col-span-1">
                <h1 className="font-[900] text-[56px]">03</h1>
                <div className="text-left">
                  <h3 className="font-black text-2xl italic font-monserrat">
                    Partner With Us
                  </h3>
                  <p class="text-lg">
                    We work with industry-leading experts and brands to develop
                    an experiential education that unlocks the potential of
                    Africa’s young geniuses.
                  </p>
                  <div class="mt-4 flex justify-center">
                    <a
                      className="font-semibold rounded-[9999px] border-2 py-[0.75rem] px-[2.25rem] border-[rgba(0,201,151,var(--tw-border-opacity))] text-[rgba(0,201,151,var(--tw-text-opacity))]"
                      rel="noreferrer"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div class="pt-4 border-t-4 border-green-900 col-span-2 md:col-span-1">
                <h1 class="font-[900] text-[56px]">04</h1>
                <div class="text-left">
                  <h3 class="font-black text-2xl italic font-monserrat">
                    Make A Donation
                  </h3>
                  <p class="text-lg">
                    Your giving can help young African geniuses to launch
                    fulfilling careers in high-growth companies. Join us to
                    transform the lives of these young people.
                  </p>
                  <div class="mt-4 flex justify-center">
                    <a
                      className="font-semibold rounded-[9999px] border-2 py-[0.75rem] px-[2.25rem] border-[rgba(0,201,151,var(--tw-border-opacity))] text-[rgba(0,201,151,var(--tw-text-opacity))]"
                      rel="noreferrer"
                      href="#"
                    >
                      Donation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#24d1a6]  mx-auto px-8 ">
        <div class=" grid grid-cols-2 gap-2 md:gap-10 py-16 md:py-0">
          <div class="col-span-2 md:col-span-1">
            <img src={img} alt="Map Image" />
          </div>
          <div className="md:pb-16 pt-4 lg:pt-28 col-span-2 md:col-span-1">
            <h1 className="font-[900] text-[56px] leading-[52px] text-[#03564e]">
              Want to reach us at our office?
            </h1>
            <p className="font-montserrat italic mt-4 text-lg font-medium">
              We’d love to hear from you for partnerships, sponsorship
              discussions, recruitment engagements, compliments, and general
              business inquiries. Click on the link below to locate the Google
              map to our office.
            </p>
            <div className="mt-4 flex justify-center lg:justify-end">
              <a
                href="#"
                class="text-[#02f980] bg-[#03564e] rounded-[2rem] py-4 px-8"
              >
                Get Direction
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
