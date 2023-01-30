import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

import { Title } from "components/Title/Title"
import { useState } from "react";


export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onAddClick = (option) => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    return bad + neutral + good;
  }

  const countPositiveFeedbackPercentage = () => {
    const sum = Number(bad) + Number(neutral) + Number(good)
    return Math.trunc(Number(good) * 100 / sum)
  }

  const isCount = () => {
    if (bad + neutral + good === 0) return false
      else return true
  }


  return (
      <div>
        <Title title="Please leave feedback" />
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onAddClick} />
        <Title title="Statisticks" />
        {isCount() && <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        }
        {!isCount() && <Notification message="There is no feedback"/>}
        
      </div>
    )
}