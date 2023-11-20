import "./stlye.scss";

const Form = () => {
  return (
    <div className="form">
      <form>
        <div className="org">
          <label htmlFor="organization">Organization:</label>
          <select>
            <option disabled>Select </option>
            <option value="irorun">Irorun </option>
            <option value="lendsqr">Lendsqr </option>
          </select>
        </div>
        <div className="username">
          <label htmlFor="usernamr">Username:</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="date">
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" id="" placeholder="Date" />
        </div>
        <div className="phone">
          <label htmlFor="phone number"> Phone number:</label>
          <input type="text" placeholder="Phone number" />
        </div>
        <div className="status">
          <label htmlFor="status">Status</label>
          <select name="status" id="">
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            <option value="pending">pending</option>
            <option value="blacklist">blacklist</option>
          </select>
        </div>
        <div className="btns">
          <button className="reset">Reset</button>
          <button className="filter">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
