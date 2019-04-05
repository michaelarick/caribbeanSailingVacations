import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <label htmlFor="boat-name">
        <strong>Boat Name</strong>
      </label>
      <input
        className="form-control"
        id="boat-name"
        type="text"
        value={props.boatName}
        placeholder="name of the boat..."
        name="boatName"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="description">
        <strong>Description of Boat</strong>
      </label>
      <input
        className="form-control"
        id="description"
        type="text"
        value={props.description}
        placeholder="Boat size etc..."
        name="description"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="image-url">
        <strong>Image URL</strong>
      </label>
      <input
        className="form-control"
        id="image-url"
        type="text"
        value={props.img}
        placeholder="yourimage.png"
        name="img"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;
