import { hoursData } from '../data/contactData';
import { nanoid } from 'nanoid';
const HoursDisplay = ({ listClass, itemClass }) => {
  return (
    <ul className={listClass}>
      {hoursData.map((hour) => {
        const id = nanoid();
        const { date, opening, closing } = hour;
        return (
          <li key={id} className={itemClass}>
            {date}:
            <span className="timeSlot">
              {opening} - {closing}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default HoursDisplay;
