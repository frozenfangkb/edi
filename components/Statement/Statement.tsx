import { Box } from "@mui/system";
import { AnimateGroup, Animate } from "react-simple-animate";

interface Props {
    statements: string[];
}

export const Statement: React.FC<Props> = ({ statements }: Props) => {
    return (
        <Box sx={{ p: "2rem" }}>
            <ul>
                <AnimateGroup play>
                    {statements.map((statement, index) => (
                        <Animate
                            key={index}
                            sequenceIndex={index}
                            end={{ opacity: 1, transform: "translateY(0px)" }}
                            start={{
                                opacity: 0,
                                transform: "translateY(-10px)",
                            }}
                        >
                            <li>{statement}</li>
                        </Animate>
                    ))}
                </AnimateGroup>
            </ul>
        </Box>
    );
};
