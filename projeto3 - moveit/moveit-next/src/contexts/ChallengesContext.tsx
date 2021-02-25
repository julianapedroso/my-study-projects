import { createContext, useState, ReactNode } from "react";
import challenges from "../../challenges.json";

interface Challenge {
    type: "body" | "eye",
    description: string,
    amount: number
}

interface ChallengesContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    activeChallenge: Challenge,
    experienceToNextLevel: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(100);
  const [challengesCompleted, setChallengeCompleted] = useState(1);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1 ) * 20, 2)

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
     const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
     const challenge = challenges[randomChallengeIndex]
     setActiveChallenge(challenge)
  }

  const resetChallenge = () => {
      setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{ 
          level, 
          currentExperience, 
          challengesCompleted, 
          activeChallenge,
          experienceToNextLevel,
          levelUp, 
          startNewChallenge,          
          resetChallenge, 
         }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
