import { useState } from "react";
import { Data } from "../Data";
export default function Question() {
  const [selectedOption, setSelectedOption] = useState(
    new Array(Data.length).fill(null)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = () => {
    if (currentIndex === Data.length - 1) {
      // Calculate the result at the end of the quiz
      const score = selectedOption.reduce((acc, answer, index) => {
        return acc + (answer === Data[index].correctOption ? 1 : 0);
      }, 0);
      alert(`You have solved ${score} questions correctly`);
    } else {
      // Move to next question
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClickOption = (index, optionIndex) => {
    // Update the option selection for the current question
    const newSelectedOptions = [...selectedOption];
    newSelectedOptions[index] = optionIndex;
    setSelectedOption(newSelectedOptions);
  };

  const quest = Data[currentIndex];

  return (
    <>
      <div className="container h-screen bg-gray-300 flex justify-center items-center mx-auto">
        <div className="quizBody h-screen w-screen border-2 md:w-[600px] md:h-[80vh] border-gray-500 bg-white flex justify-center flex-col align-middle gap-4 p-10 shadow-2xl">
          <div className="quizName mx-auto bg-black  w-full">
            <p className="text-white text-center">Take this Quiz</p>
          </div>
          <p className="mx-auto">{quest.question}</p>
          {quest.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              className="p-5 border-2 border-gray-500 hover:bg-gray-300"
              onClick={() => handleClickOption(currentIndex, optionIndex)}
              style={{
                backgroundColor:
                  selectedOption[currentIndex] === optionIndex
                    ? "black"
                    : "initial",
                color:
                  selectedOption[currentIndex] === optionIndex
                    ? "white"
                    : "initial",
              }}
            >
              {option}
            </button>
          ))}
          <button
            onClick={handleSubmit}
            className="skip border-2 border-gray-500 rounded-lg bg-black text-white h-10"
          >
            {currentIndex === Data.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}
