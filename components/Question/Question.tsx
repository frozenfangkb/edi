import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Animate } from "react-simple-animate";

interface Props {
    question: string;
    answer: string;
    step: number;
    currentStep: number;
    nextStep: () => void;
}

export const Question: React.FC<Props> = ({
    question,
    answer,
    step,
    currentStep,
    nextStep,
}: Props) => {
    return (
        <Animate
            play={currentStep === step}
            start={{ opacity: 0, transform: "translateY(-20px)" }}
            end={{ opacity: 1, transform: "translateY(0)" }}
        >
            <div className="paper">
                <span>{question}</span>
                <TextField variant="outlined"></TextField>
                <Button
                    variant="contained"
                    className="nextStepButton"
                    onClick={nextStep}
                >
                    ¡Vamos allá!
                </Button>
            </div>
        </Animate>
    );
};
