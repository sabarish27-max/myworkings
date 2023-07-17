import React from 'react';
import { tabledata } from './Data';

const TableRow = ( props) => {
  return (
    <tr>
      <th scope="row">{props.number}</th>
      <td>{props.name}</td>
      <td>{props.last}</td>
      <td>{props.handle}</td>
      <td>{props.phone}</td>
    </tr>
  );
};

const Table = () => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">phone</th>
        </tr>
      </thead>
      <tbody>
        {tabledata.map((values, index) => (
          <TableRow
            key={index}
            number={values.number}
            name={values.name}
            last={values.last}
            handle={values.handle}
            phone={values.phone}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
