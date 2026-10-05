import { useEffect, useState } from "react";
import { getClasses, type ArtClass } from "./ClassesLogic";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Classes.css";
import ClassSignup from "../components/ClassSign/ClassSignup";

type Category = "all" | "kids" | "teens" | "adults" | "college";

function ClassesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const [classes, setClasses] = useState<ArtClass[]>([]);

  useEffect(() => {
    getClasses()
      .then((data) => {
        setClasses(data);
      })
      .catch((error) => {
        console.error("Error loading classes:", error);
      });
  }, []);
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];
  return (
    <div className="classes-page">
      <Navbar />

      <main className="classes-main">
        <section className="classes-header">
          <h1>Find Your Class</h1>

          <p>
            Explore our weekly schedule and find the class that works best for
            you and your family.
          </p>
          <section className="class-filters">
            <button
              className={selectedCategory === "all" ? "active" : ""}
              onClick={() => setSelectedCategory("all")}
            >
              All Classes
            </button>

            <button
              className={selectedCategory === "kids" ? "active" : ""}
              onClick={() => setSelectedCategory("kids")}
            >
              Kids
            </button>

            <button
              className={selectedCategory === "teens" ? "active" : ""}
              onClick={() => setSelectedCategory("teens")}
            >
              Teens 12–18
            </button>

            <button
              className={selectedCategory === "adults" ? "active" : ""}
              onClick={() => setSelectedCategory("adults")}
            >
              Adults 18+
            </button>

            <button
              className={selectedCategory === "college" ? "active" : ""}
              onClick={() => setSelectedCategory("college")}
            >
              College Preparation
            </button>
          </section>
        </section>

        <section className="schedule-section">
          <div className="schedule-heading">
            <h2>Weekly Schedule</h2>

            <p>
              View the weekly class times and select the category that interests
              you.
            </p>
          </div>

         <div className="weekly-calendar">

  <div className="calendar-header">
    <div className="time-header"></div>

    {days.map((day) => (
      <div className="day-header" key={day}>
        {day}
      </div>
    ))}
  </div>

  <div className="calendar-body">

    <div className="time-column">
      {times.map((time) => (
        <div className="time-slot" key={time}>
          {time}
        </div>
      ))}
    </div>

    {days.map((day) => (
      <div className="day-column" key={day}>

        {times.map((time) => (
          <div className="calendar-cell" key={time}></div>
        ))}

        {classes.flatMap((artClass) =>
          artClass.schedules
            .filter((schedule) => schedule.dayOfWeek === day)
            .map((schedule) => (
              <div
                className={`calendar-class ${artClass.category}`}
                key={schedule.id}
                style={{
                  top: `${
                    (parseInt(schedule.startTime.split(":")[0]) - 9) * 70 +
                    (parseInt(schedule.startTime.split(":")[1]) / 60) * 70
                  }px`,

                  height: `${
                    (
                      parseInt(schedule.endTime.split(":")[0]) * 60 +
                      parseInt(schedule.endTime.split(":")[1]) -
                      (parseInt(schedule.startTime.split(":")[0]) * 60 +
                        parseInt(schedule.startTime.split(":")[1]))
                    ) /
                    60 *
                    70
                  }px`,
                }}
              >
                <strong>{artClass.name}</strong>

                <span>
                  {schedule.startTime.slice(0, 5)}–
                  {schedule.endTime.slice(0, 5)}
                </span>
              </div>
            ))
        )}

      </div>
    ))}

  </div>

</div>
        </section>

  <section className="class-details-section">
  <div className="class-details-heading">
    <h2>Class Details</h2>

    <p>
      Learn more about our classes and choose the class that's right for you.
    </p>
  </div>

  {/* KIDS */}
  <div className="class-detail">
    <div className="class-detail-top">
      <h3>Kids</h3>
      <span>Ages 6 – 11</span>
    </div>

    <p className="class-detail-schedule">
      Monday (15:00–16:30)
    </p>

    <p className="class-detail-description">
      A creative painting class where children learn about color,
      drawing and painting techniques while developing their own
      artistic style.
    </p>

    <div className="class-detail-bottom">
      <p>
        Teacher: <strong>Anna</strong>
      </p>

      <ClassSignup
        name="Kids"
        day="Monday"
        time="15:00–16:30"
        ageGroup="Ages 6–11"
        totalClasses={12}
        price={600}
        capacity={12}
        registeredCount={8}
      />
    </div>
  </div>

  {/* TEENS */}
  <div className="class-detail">
    <div className="class-detail-top">
      <h3>Teen</h3>
      <span>Ages 12–18</span>
    </div>

    <p className="class-detail-schedule">
      Wednesday (17:00–18:30)
    </p>

    <p className="class-detail-description">
      Learn illustration, character drawing and different creative
      techniques while developing stronger drawing skills.
    </p>

    <div className="class-detail-bottom">
      <p>
        Teacher: <strong>Daniel</strong>
      </p>

      <ClassSignup
        name="Teen"
        day="Wednesday"
        time="17:00–18:30"
        ageGroup="Ages 12–18"
        totalClasses={12}
        price={600}
        capacity={12}
        registeredCount={12}
      />
    </div>
  </div>

  {/* ADULT */}
  <div className="class-detail">
    <div className="class-detail-top">
      <h3>Adult</h3>
      <span>Ages 18+</span>
    </div>

    <p className="class-detail-schedule">
      Tuesday (19:00–21:00)
    </p>

    <p className="class-detail-description">
      Develop observational drawing and sketching skills while exploring
      different drawing materials and techniques.
    </p>

    <div className="class-detail-bottom">
      <p>
        Teacher: <strong>Sarah</strong>
      </p>

      <ClassSignup
        name="Adult"
        day="Tuesday"
        time="19:00–21:00"
        ageGroup="Ages 18+"
        totalClasses={12}
        price={600}
        capacity={12}
        registeredCount={8}
      />
    </div>
  </div>

  {/* COLLEGE */}
  <div className="class-detail">
    <div className="class-detail-top">
      <h3>College Preparation</h3>
      <span>College Applicants</span>
    </div>

    <p className="class-detail-schedule">
      Thursday (16:00–19:00)
    </p>

    <p className="class-detail-description">
      Build and improve your art portfolio while preparing for art
      school and college applications.
    </p>

    <div className="class-detail-bottom">
      <p>
        Teacher: <strong>Michael</strong>
      </p>

      <ClassSignup
        name="College Preparation"
        day="Thursday"
        time="16:00–19:00"
        ageGroup="College Applicants"
        totalClasses={12}
        price={600}
        capacity={12}
        registeredCount={8}
      />
    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}

export default ClassesPage;
