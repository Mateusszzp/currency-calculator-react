import { Time } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

const Clock = () => {
  const { time, myDate } = useCurrentDate()

  return (
    <p>
      <Time>
        Dzisiaj jest {myDate(time)}
      </Time>
    </p>
  )
};
export default Clock;

