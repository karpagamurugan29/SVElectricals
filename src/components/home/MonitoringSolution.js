import React from "react";
import {
  FaPeopleArrows,
  FaHeadSideMask,
  FaTemperatureHigh,
  FaChalkboardTeacher,
} from "react-icons/fa";

import {
  MdHealthAndSafety,
  MdSupervisorAccount,
} from "react-icons/md";

import { BsShieldCheck } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";

export const MonitoringSolution = () => {
  return (
    <div>
      <section className="si__service__five__area pt-120 pb-120">
        <div className="container custom__container">

          {/* Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="si__service__five__content text-center">
                <h1>COVID-19 Safety Standards</h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="row mont-solt">
            {/* Strict Social Distancing */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="si__service__five__box">
                <div className="si__service__five__icon">
                  <FaPeopleArrows />
                </div>

                <div className="si__service__five__text">
                  <h5>Strict Social Distancing</h5>

                  <p>
                    Maintaining safe distancing practices across all work
                    environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Arogya Setu */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="si__service__five__box">
                <div className="si__service__five__icon">
                  <MdHealthAndSafety />
                </div>

                <div className="si__service__five__text">
                  <h5>Arogya Setu for Digital Monitoring</h5>

                  <p>
                    Using digital monitoring systems to ensure workplace health
                    safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Masks */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="si__service__five__box">
                <div className="si__service__five__icon">
                  <FaHeadSideMask />
                </div>

                <div className="si__service__five__text">
                  <h5>Masks for Employees</h5>

                  <p>
                    Providing protective masks to ensure employee safety at all
                    times.
                  </p>
                </div>
              </div>
            </div>

            {/* Storage Safety */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="si__service__five__box">
                <div className="si__service__five__icon">
                  <BsShieldCheck />
                </div>

                <div className="si__service__five__text">
                  <h5>Storage Safety Protocol</h5>

                  <p>
                    Following strict safety protocols for secure material
                    storage and handling.
                  </p>
                </div>
              </div>
            </div>

            {/* Temperature */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="si__service__five__box">
                <div className="si__service__five__icon">
                  <FaTemperatureHigh />
                </div>

                <div className="si__service__five__text">
                  <h5>Temperature Scanning</h5>

                  <p>
                    Conducting regular temperature checks for all employees and
                    visitors.
                  </p>
                </div>
              </div>
            </div>

            {/* Sanitization */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="si__service__five__box">
                <div className="si__service__five__icon">
                  <GiHealthNormal />
                </div>

                <div className="si__service__five__text">
                  <h5>Sanitization</h5>

                  <p>
                    Ensuring regular sanitization of workplaces and equipment.
                  </p>
                </div>
              </div>
            </div>

            {/* Awareness */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="si__service__five__box">
                <div className="si__service__five__icon">
                  <FaChalkboardTeacher />
                </div>

                <div className="si__service__five__text">
                  <h5>Awareness Through Trainings</h5>

                  <p>
                    Conducting safety awareness and training programs for
                    employees.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Supervisors */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="si__service__five__box">
                <div className="si__service__five__icon">
                  <MdSupervisorAccount />
                </div>

                <div className="si__service__five__text">
                  <h5>Safety Supervisors</h5>

                  <p>
                    Dedicated supervisors monitoring workplace safety and
                    compliance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};