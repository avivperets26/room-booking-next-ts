import { BackgroundInfo } from "@/components/BackgroundInfo/BackgroundInfo";
import { Confirmation } from "@/components/Confirmation/Confirmation";
import ContractSigning from "@/components/ContractSigning/ContractSigning";
import WelcomeView from "@/components/WelcomeView/WelcomeView";
import { useRouter } from "next/router";
import React from "react";

const BookingPage = () => {
  const router = useRouter();
  const { step = "1", roomId } = router.query; // Default to step 1 if not specified
  // Update the URL to move to the next/previous step
  const navigate = (nextStep: string) => {
    router.push(`/booking/${roomId}?step=${nextStep}`);
  };

  // Render different components based on the step
  const renderStep = () => {
    switch (step) {
      case "1":
        return <BackgroundInfo onNext={() => navigate("2")} />;
      case "2":
        return (
          <Confirmation
            onPrevious={() => navigate("1")}
            onNext={() => navigate("3")}
          />
        );
      case "3":
        return (
          <ContractSigning
            onPrevious={() => navigate("2")}
            onNext={() => navigate("4")}
          />
        );
      case "4":
        return <WelcomeView onDone={() => router.push("/")} />;
      default:
        return <p>Invalid step</p>;
    }
  };

  return <div>{renderStep()}</div>;
};

export default BookingPage;
