import SuccessSvg from "@/svg/SuccessSvg";
import Button from "../Button/Button";
import Confetti from "@/animations/Confetti";

interface WelcomeViewProps {
  onDone: () => void;
}

const WelcomeView: React.FC<WelcomeViewProps> = ({ onDone }) => {
  return (
    <div className="welcome-view-container">
      <h2>Welcome!</h2>
      <p>Your booking process is complete. Welcome to your new home!</p>
      <SuccessSvg />
      <div className="actions">
        <Button type="done" onClick={onDone} />
      </div>
      <Confetti />
    </div>
  );
};

export default WelcomeView;
