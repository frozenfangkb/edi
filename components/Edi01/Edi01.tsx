import { useState } from "react";
import { Button, Paper } from "@mui/material";
import styles from "./Edi01.module.css";
import { Animate } from "react-simple-animate";
import { Question } from "../Question/Question";
import { Statement } from "../Statement/Statement";
import { Final } from "../Final/Final";

interface Step {
    id: number;
    question: string;
    answer: string;
}

export const Edi01: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const steps: Step[] = [
        {
            id: 2,
            question:
                "¿Quién inventó el teléfono? Resulta, que es del país al que vamos...",
            answer: "Alexander Graham Bell",
        },

        {
            id: 3,
            question:
                "¿En qué isla o continente se ubica el país en el que se creó el primer cuerpo de bomberos municipal de la historia?",
            answer: "Gran Bretaña",
        },
        {
            id: 4,
            question:
                "Ella escribió la mayoría de los libros de magia y hechicería más conocidos del mundo en el lugar al que viajaremos",
            answer: "JK Rowling",
        },
        {
            id: 5,
            question: "Es un instrumento que por sí mismo representa a un país",
            answer: "Gaita",
        },
        {
            id: 6,
            question:
                "Prenda que es llevada por hombres de un país, típica del mismo, y en el resto del mundo (otra variante) normalmente es vestida por mujeres",
            answer: "Kilt",
        },
    ];

    const statements = [
        "Su animal oficial es el unicornio",
        "Es un país, pero no...",
        "Los lagos de este país albergan una superficie de más de 1500 kilómetros cuadrados",
        "Posiblemente, podríamos considerarlos como los reyes del whisky",
        "Tienen el vuelo comercial más corto del mundo",
        "Este país tiene más de 3000 castillos",
        "En este país se tomó la primera foto en color del mundo",
        "Su plato nacional tiene prohibida su importación en estados unidos desde 1971",
    ];

    return (
        <div>
            <div className={styles.bg} />
            <div className={styles.cover} />
            <div className={styles.contentHeader}>
                {"Feliz cumpleaños Saray "}
                <span className="pt-6 pl-4">❤</span>
            </div>
            <div className={styles.contentContainer}>
                <Paper>
                    {step === 1 && (
                        <Animate
                            play={step === 1}
                            start={{
                                opacity: 0,
                                transform: "translateY(-20px)",
                            }}
                            end={{ opacity: 1, transform: "translateY(0)" }}
                        >
                            <div className="paper">
                                <span style={{ maxWidth: "65%" }}>
                                    Gracias. Gracias por estar aquí junto a
                                    nosotros, por ser esa persona con la que
                                    siempre podemos contar, por ser la mejor
                                    amiga que ellos han podido conocer, y la
                                    mujer más maravillosa que yo tengo la suerte
                                    de tener en mi vida. Quiero agradecerte
                                    tener la suerte de compartir contigo este
                                    día, y poder pasar todos y cada uno de los
                                    que me queden de vida contigo, aquí, en
                                    París, en Oporto, o... ¿Dónde? <br />
                                    Vamos a descubrirlo =D
                                </span>
                                <Button
                                    variant="contained"
                                    className="nextStepButton"
                                    onClick={() => setStep(2)}
                                >
                                    ¡Vamos allá!
                                </Button>
                            </div>
                        </Animate>
                    )}
                    {step > 1 &&
                        step < 7 &&
                        steps.map((st) => (
                            <Question
                                key={st.id}
                                question={st.question}
                                answer={st.answer}
                                nextStep={() => setStep(step + 1)}
                                step={st.id}
                                currentStep={step}
                            />
                        ))}
                    {step === 7 && (
                        <Statement
                            statements={statements}
                            nextStep={() => setStep(step + 1)}
                        />
                    )}
                    {step === 8 && <Final />}
                </Paper>
            </div>
        </div>
    );
};
