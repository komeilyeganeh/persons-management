import React from "react";

const Person = ({ fullname, deleted, changed }) => {
  return (
    <div className="card bg-info text-white mb-3 mt-3 w-25 mx-auto">
      <div className="card-body text-center">
        <p className="d-block">{`${fullname}`}</p>
        <div className="input-group justify-content-center">
          <input type="text" value={fullname} className="form-control w-50" onChange={changed}/>
          <div className="input-group-prepend">
            <button className="btn btn-danger btn-sm fa fa-trash" onClick={deleted}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
