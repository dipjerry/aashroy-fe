import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/form-hook';
import './AddNgo.css';
import Modal from '../../shared/components/UIelements/Modal';
const AddNgo = () => {
  const [formState, inputHandler] = useForm(
      {
        name: {
          value: '',
          isValid: false,
        },
        description: {
          value: '',
          isValid: false,
        },
        address: {
          value: '',
          isValid: false,
        },
        age: {
          value: '',
          isValid: false,
        },
      },
      false,
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };
  const [showForm, setShowForm] = React.useState(false);

  const openFormHandler = () => setShowForm(true);

  const closeFormHandler = () => setShowForm(false);

  return (
    <React.Fragment>
      <h2>Add a new homeless person</h2>
      <Modal
        show={showForm}
        onCancel={closeFormHandler}
        header="Add New Homeless"
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeFormHandler}>CLOSE</Button>}
      >
        <form className="place-form" onSubmit={placeSubmitHandler}>
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid  name"
            onInput={inputHandler}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description
            (at least 5 characters)." onInput={inputHandler}
          />
          <Input
            id="address"
            element="input"
            label="Address"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
          />
          <Input
            id="age"
            element="input"
            label="Age"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid age."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
        Add Person
          </Button>
        </form>
      </Modal>
      <Button inverse onClick={openFormHandler}>Register a Ngo</Button>
    </React.Fragment>
  );
};

export default AddNgo;
