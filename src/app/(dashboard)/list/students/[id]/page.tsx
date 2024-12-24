import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/*LEFT*/}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682091992663-2e4f4a5534ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Kroes Soda</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
              <div className="w-full lg:w-full md:w-1/3 flex items-center gap-2">
                <Image src="/blood.png" alt="" width={14} height={14} />
                <span>A+</span>
              </div>

              <div className="w-full lg:w-full md:w-1/3 flex items-center gap-2">
                <Image src="/date.png" alt="" width={14} height={14} />
                <span>23, December, 2025</span>
              </div>

              <div className="w-full lg:w-full md:w-1/3 flex items-center gap-2">
                <Image src="/mail.png" alt="" width={14} height={14} />
                <span>sopheak@gmail.com</span>
              </div>

              <div className="w-full lg:w-full md:w-1/3 flex items-center gap-2">
                <Image src="/phone.png" alt="" width={14} height={14} />
                <span>010-871-252</span>
              </div>
            </div>
          </div>
        </div>
        {/* SMALL CARD */}
        <div className="flex-1 flex gap-4 justify-between flex-wrap mt-4">
          {/* CARD */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
            <Image
              src="/singleAttendance.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <div className="">
              <h1 className="text-xl font-semibold">90%</h1>
              <span className="text-sm text-gray-500">Attendance</span>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%]">
            <Image
              src="/singleLesson.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <div className="">
              <h1 className="text-xl font-semibold">6th</h1>
              <span className="text-sm text-gray-500">Grade</span>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%]">
            <Image
              src="/singleClass.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <div className="">
              <h1 className="text-xl font-semibold">6A</h1>
              <span className="text-sm text-gray-500">Class</span>
            </div>
          </div>
        </div>

        {/* BUTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap flex-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSky" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default SingleStudentPage;
