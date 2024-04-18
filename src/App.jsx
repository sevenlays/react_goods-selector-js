import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setValue] = useState('Jam');

  const clearClick = () => {
    setValue('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value ? `${value} is selected` : 'No goods selected'}
        {value && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearClick}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={value === good && 'has-background-success-light'}
            >
              <td>
                {value !== good ? (
                  <button
                    onClick={() => setValue(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={clearClick}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
