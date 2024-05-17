import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from './EventBoard.styled';
import { allEvents } from '../../Redux/eventThunks';
import { EventsList } from '../../components/EventsList/EventsList';
import { Container } from '../../components/Container/Container';
import {
  getAllEvents,
  getCurrentPage,
  getIsLoading,
} from '../../Redux/selectors';
import InfiniteScroll from 'react-infinite-scroll-component';

const EventBoard = () => {
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const isLoading = useSelector(getIsLoading);
  const events = useSelector(getAllEvents);

  const fetchMoreData = () => {
    if (hasMoreData) {
      setPage((prevPage) => prevPage + currentPage);
      dispatch(allEvents(currentPage));
    }
  };

  useEffect(() => {
    dispatch(allEvents(page)).then((result) => {
      if (result.payload.length === 0) {
        setHasMoreData(false);
      }
    });
  }, [page, dispatch]);

  return (
    <Container>
      <Title>Events</Title>

      {isLoading ? (
        <InfiniteScroll
          next={fetchMoreData}
          dataLength={events.length}
          hasMore={true}
          pageStart={page}
          useWindow={false}
        >
          <EventsList />
          
        </InfiniteScroll>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default EventBoard;
