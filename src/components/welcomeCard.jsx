import videoBg from "../../public/assets/bg-video.mp4";
import "./welcomeCard.css";
export const WelcomeCard = (props) => {
  const { heading, name, yearsStart, yearsEnd, children } = props;
  return (
    <div className="container">
      <video autoPlay loop muted className="video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card">
      <h1>{heading}</h1>
      <h3>
        {" "}
        "Back to the days when story mattered and stars delivered — OG Telugu vibes, reloaded!” {yearsStart}- {yearsEnd}
        {" "}
      </h3>
      {children}
      </div>
    </div>

    
  );
};
