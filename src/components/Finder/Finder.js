import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLazyQuery, useMutation } from '@apollo/client';

import debounce from '../../utils/debounce';
import Button from '../common/Button';
import InlineBox from '../common/InlineBox';
import Spacer from '../common/Spacer';
import Dropoff from '../common/SvgIcons/Dropoff';
import Pickup from '../common/SvgIcons/Pickup';
import TextField from '../common/TextField';
import { FinderWrapper } from './Finder.style';
import { createJob } from '../../mockAPI';
import { GEOCODE } from '../../queries/geocode';
import { CREATE_JOB } from '../../mutations/jobs';

export default function Finder({ onAddressChange }) {
  const [geocode, { loading, error, data }] = useLazyQuery(GEOCODE);
  const [addresses, setAddresses] = useState({});
  const [lastInputChanged, setLastInputChanged] = useState();
  const [
    job,
    { loading: creationLoading, error: creationError },
  ] = useMutation(CREATE_JOB, {
    onCompleted: () => {
      toast.dark('Job has been created successfully!');
    },
    onError: () => {
      toast.error('something went wrong...');
    },
  });
  const [formValidation, setFormValidation] = useState({
    pickup: 'default',
    dropoff: 'default',
  });

  const handleCreateJob = async (e) => {
    e.preventDefault();
    job({
      variables: {
        pickup: addresses.pickup,
        dropoff: addresses.dropoff,
      },
    });
  };

  useEffect(() => {
    if (data?.geocode && !loading) {
      setFormValidation({
        ...formValidation,
        [lastInputChanged]: 'valid',
      });
      onAddressChange(lastInputChanged, data.geocode);
    }

    if (error && !loading) {
      setFormValidation({
        ...formValidation,
        [lastInputChanged]: 'error',
      });
    }
  }, [data, loading, error, lastInputChanged]);

  const handleOnChange = debounce((e) => {
    if (e.target.value === '') {
      setAddresses({});
      return setFormValidation({
        ...formValidation,
        [e.target.name]: 'default',
      });
    }

    geocode({ variables: { address: e.target.value } });
    setAddresses({ ...addresses, [e.target.name]: e.target.value });
    setLastInputChanged(e.target.name);
  }, 500);

  const isValidForm = () => {
    if (
      formValidation.pickup === 'valid' &&
      formValidation.dropoff === 'valid'
    ) {
      return true;
    }

    return false;
  };

  return (
    <FinderWrapper>
      <form onSubmit={handleCreateJob}>
        <InlineBox>
          <Pickup status={formValidation.pickup} />
          <Spacer size="sm" />
          <TextField
            onChange={handleOnChange}
            placeholder="Pick up address"
            name="pickup"
            type="text"
            tabIndex="0"
          />
        </InlineBox>

        <Spacer size="md" />

        <InlineBox>
          <Dropoff status={formValidation.dropoff} />
          <Spacer size="sm" />
          <TextField
            onChange={handleOnChange}
            placeholder="Drop off address"
            title="Drop off address"
            name="dropoff"
            type="text"
            tabIndex="1"
          />
        </InlineBox>

        <Spacer size="md" />
        <InlineBox>
          <Spacer size="lg" />
          <Spacer size="sm" />
          <Button
            type="submit"
            onClick={handleCreateJob}
            tabIndex="2"
            title="Create job"
            disabled={!isValidForm() || creationLoading}
          >
            {creationLoading ? 'Creating...' : 'Create Job'}
          </Button>
        </InlineBox>
      </form>
    </FinderWrapper>
  );
}
