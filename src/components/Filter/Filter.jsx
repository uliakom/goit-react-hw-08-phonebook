import { Container } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <Container>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilter}
        />
      </label>
    </Container>
  );
};

export default Filter;
