import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllInOne = () => {
  return (
    <div className="w-full mt-[5rem]">
      <div className="max-w-[1240px] mx-auto px-2">
        <div className="text-center">
          <h1 className="text-5xl font-medium"> All-In-One Platform</h1>
          <p className="text-slate-600 text-xl sm:text-lg py-8">
            Our platform offers unparalleled cloud services designed to empower
            your business. Seamlessly scale resources, enhance flexibility, and
            optimize performance. With state-of-the-art security and 24/7
            support, we ensure a smooth transition to the cloud, so you can
            focus on what you do best. Welcome to the future of cloud computing.
          </p>
        </div>

        <div className="w-full mt-2">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mx-6">
            <div className="flex ">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h1 className="font-bold text-xl">Networking</h1>
                <p className="text-xl pt-2 pb-4 text-justify">
                Our Cloud platform offer networking features like virtual private clouds (VPCs), load balancers, content delivery networks (CDNs), and secure connections to ensure data security and performance.
                </p>
              </div>
            </div>
            <div className="flex ">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h2 className="font-bold text-xl">Scalability</h2>
                <p className="text-xl pt-2 pb-4 text-justify">
                Cloud platforms provide the ability to easily scale resources up or down to accommodate changing workloads. This can help businesses save costs and ensure performance during peak periods.
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Virtual Machines</h3>
                <p className="text-xl pt-2 pb-4 text-justify">
                Our platform offer virtual machines (VMs) that allow users to run applications and workloads on virtualized hardware, enabling flexibility and resource isolation.
                </p>
              </div>
            </div>
            <div className="flex ">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Storage Services</h3>
                <p className="text-xl pt-2 pb-4 text-justify">
                Our platform provide various storage options, including object storage, block storage, and file storage, allowing users to store and retrieve data efficiently.
                </p>
              </div>
            </div>
            <div className="flex ">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Compute Services</h3>
                <p className="text-xl pt-2 pb-4 text-justify">
                We offer serverless computing, container orchestration, and functions as a service (FaaS) to run and manage applications without worrying about the underlying infrastructure.
                </p>
              </div>
            </div>
            <div className="flex ">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Analytics and Big Data</h3>
                <p className="text-xl pt-2 pb-4 text-justify">
          We offer services for big data processing, data warehousing, and analytics, allowing businesses to gain insights from their data.
                </p>
              </div>
            </div>
            <div className="flex ">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Security and Compliance</h3>
                <p className="text-xl pt-2 pb-4 text-justify">
                Our platform offers robust security measures, identity and access management, encryption, and compliance certifications to protect data and applications.
                </p>
              </div>
            </div>
            <div className="flex ">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Databases</h3>
                <p className="text-xl pt-2 pb-4 text-justify">
                Our platform provides managed database services, including relational, NoSQL, and in-memory databases, making it easy to set up, operate, and scale databases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
