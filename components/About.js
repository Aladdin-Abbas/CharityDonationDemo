import Image from "next/image";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.main}>
      <Image layout="fill" src="/cover_bg_1.jpg" alt="Charity background" />
      <div>
        <p>
          <q>
            {" "}
            WE MAKE A LIVING BY WHAT WE <span>GET</span> BUT {"\n"} WE MAKE A
            LIFE BY WHAT WE <span>GIVE</span> .
          </q>
        </p>
      </div>
    </div>
  );
};

export default About;
