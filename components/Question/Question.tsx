import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
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
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const errorMessages = [
        "Contaba con que lo supieras...",
        "Oh, venga ya...",
        "Vaya, pues parece que va a ser que no...",
        "No, no, no, no, no...",
        "No creo que sea eso, eh...",
        "MEEEEEEEK, error...",
        "Podría ser, pero no...",
        "Y yo que pensaba que no eras un muggle...",
        "Vamos, que no es tan difícil...",
    ];

    const handleAnswer = () => {
        if (userAnswer.toLowerCase() === answer.toLowerCase()) {
            nextStep();
        } else {
            setErrorMessage(
                errorMessages[Math.floor(Math.random() * errorMessages.length)]
            );
            setError(true);
        }
    };

    return (
        <>
            {step === currentStep && (
                <Animate
                    play={currentStep === step}
                    start={{ opacity: 0, transform: "translateY(-20px)" }}
                    end={{ opacity: 1, transform: "translateY(0)" }}
                >
                    <div className="paper">
                        <span>{question}</span>
                        <TextField
                            variant="outlined"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            error={error}
                            helperText={errorMessage}
                        ></TextField>
                        <Button
                            variant="contained"
                            className="nextStepButton"
                            onClick={handleAnswer}
                        >
                            Responder
                        </Button>
                    </div>
                </Animate>
            )}
        </>
    );
};
