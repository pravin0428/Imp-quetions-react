 
import useClock from "../hooks/useClock";

type Props = {
  label :string;
};

const Clock = ({label}: Props) => {
  // console.log(props)
  // const {label} = props
  const {hours ,  minutes , seconds} = useClock()

  

  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
       {label}  
      </h4>
      <span data-testid="clock-hours">
      
        {hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {/* Minutes */}
       { minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {seconds}
        </span>
    </div>
  );
};

export default Clock;
