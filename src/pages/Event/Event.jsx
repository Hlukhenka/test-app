import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getEvent } from '../../Redux/eventThunks';
import { getOneEvent, getIsLoading } from '../../Redux/selectors';
import { Container } from '../../components/Container/Container';
import { Item, List } from './Event.styled';

const Event = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector(getOneEvent);

  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getEvent(_id));
  }, [dispatch, _id]);

  return (
    <Container>
      <Link to="/eventBoard">Go Back</Link>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{event.title} participants</h2>
          <List>
            {event?.users && event.users.length > 0 ? (
              event.users.map((user) => {
                return (
                  <Item key={user._id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.birth}</p>
                  </Item>
                );
              })
            ) : (
              <p>
                No participants available.{' '}
                <Link
                  to={{
                    pathname: '/registerPage',
                  }}
                  state={{ _id }}
                >
                  Register for the event
                </Link>
              </p>
            )}
          </List>
        </>
      )}
    </Container>
  );
};

export default Event;
