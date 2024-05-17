import { useSelector } from 'react-redux';
import { getAllEvents } from '../../Redux/selectors';
import { Item, List } from './EventsList.styled';
import { Link } from 'react-router-dom';

export const EventsList = () => {
  const allEvents = useSelector(getAllEvents);

  return (
    <>
      <List>
        {allEvents.map(({ title, description, _id }) => {
          return (
            <Item key={_id}>
              <p>{title}</p>
              <p>{description}</p>

              <Link
                to={{
                  pathname: '/registerPage',
                }}
                state={{ _id }}
              >
                Register
              </Link>
              {' '}
              <Link to={`event/${_id}`}>View</Link>
            </Item>
          );
        })}
      </List>
    </>
  );
};
