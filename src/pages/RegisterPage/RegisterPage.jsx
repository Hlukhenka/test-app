import { useDispatch } from 'react-redux';
import { Container } from '../../components/Container/Container';
import { registerUser } from '../../Redux/eventThunks';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  Label,
  Form,
  Radio,
  LabelRadio,
  RegisterBtn,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const eventId = location.state._id;

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, date } = e.target.elements;

    dispatch(
      registerUser({
        name: name.value,
        email: email.value,
        birth: date.value,
        aboutEvent: selectedOption,
        _id: eventId,
      })
    );

    e.target.reset();
  };

  return (
    <Container>
      <Link
        to={{
          pathname: `/eventBoard/event/${eventId}`,
        }}
      >
        Go Back
      </Link>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <input type="text" name="name" />
        </Label>
        <Label>
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Date of birth
          <input type="text" name="date" />
        </Label>

        <p>Where did you hear about this event?</p>

        <LabelRadio>
          <Radio
            type="radio"
            name="option"
            value="Social media"
            onChange={handleRadioChange}
          />
          Social media
        </LabelRadio>
        <LabelRadio>
          <Radio
            type="radio"
            name="option"
            value="Friends"
            onChange={handleRadioChange}
          />
          Friends
        </LabelRadio>
        <LabelRadio>
          <Radio
            type="radio"
            name="option"
            value="Found myself"
            onChange={handleRadioChange}
          />
          Found myself
        </LabelRadio>

        <RegisterBtn type="submit">Register</RegisterBtn>
      </Form>
    </Container>
  );
};

export default RegisterPage;
