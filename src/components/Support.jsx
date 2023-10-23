import React from "react";
import { PhoneIcon, ArrowsmRight } from "@heroicons/react/outline";
import { AcademicCapIcon, WebIcon, SupportIcon } from "@heroicons/react/solid";
import supportImg from "../Assets/support.jpg";
const Support = () => {
  return (
    <div>
      <div className=" relative">
        <img src={supportImg} alt="supportImg" />
      </div>
      <div>
        <div>
          <h3>Support</h3>
          <h1>Finding the right team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            architecto odio labore assumenda? Nulla, placeat modi laudantium
            sequi sapiente sunt animi delectus est vel sint natus
          </p>
        </div>
        <div>
          <div>
            <div>
              <PhoneIcon />
              <h3>sales</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                dignissimos sapient
              </p>
              <div>
                <p>Contact Us</p>
              </div>
            </div>
            <div>
              <PhoneIcon />
              <h3>sales</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                dignissimos sapient
              </p>
              <div>
                <p>Contact Us</p>
              </div>
            </div>
            <div>
              <PhoneIcon />
              <h3>sales</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                dignissimos sapient
              </p>
              <div>
                <p>Contact Us</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
