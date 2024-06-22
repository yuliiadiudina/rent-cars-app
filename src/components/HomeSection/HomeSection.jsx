import css from "./HomeSection.module.css";

function HomeSection() {
  return (
    <section>
      <div className={css.homeDiv}>
        <h1 className={css.homeTitel}>&#128664; Car Rent In Ukraine &#128664;</h1>
        <p className={css.homeText}>
          Our company <span className={css.homeTextSpan}>Rent Car</span> in presents a huge selection <br />
          of cars of any
          class, as well as jeeps and commercial vehicles.<br/>
          We provide services throughout Ukraine.<br/>
          Here you can easily rent any car to suit every taste.
        </p>
      </div>
    </section>
  );
}
export default HomeSection;