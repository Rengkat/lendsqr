import { useContext, Fragment, useState, FormEvent } from "react";
import "./stlye.scss";
import { AppContext } from "../../Context/AppContext";
interface Props {
  setOrgname: (newValue: string) => void;
  setName: (newValue: string) => void;
  setEmail: (newValue: string) => void;
  setDate: (newValue: string) => void;
  setPhone: (newValue: string) => void;
  setStatus: (newValue: string) => void;
  handleFilter: (e: FormEvent) => void;
  handleReset: (e: FormEvent) => void;
  name: string;
  email: string;
  date: string;
  phone: string;
  status: string;
  orgname: string;
}
const Form = ({
  orgname,
  setOrgname,
  name,
  setName,
  email,
  setEmail,
  date,
  setDate,
  phone,
  setPhone,
  status,
  setStatus,
  handleFilter,
  handleReset,
}: Props) => {
  const { users } = useContext(AppContext);
  const orgs = [...new Set(users.map((user) => user.orgName))];
  return (
    <div style={{ position: "relative" }}>
      <div className="form">
        <form>
          <div className="org">
            <label htmlFor="organization">Organization:</label>
            <select onChange={(e) => setOrgname(e.target.value)} value={orgname}>
              <option disabled>Select </option>
              {orgs.map((org) => {
                return (
                  <Fragment key={org}>
                    <option value={org}>{org} </option>
                  </Fragment>
                );
              })}
              <option value="lendsqr">Lendsqr </option>
            </select>
          </div>
          <div className="username">
            <label htmlFor="username">Username:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="date">
            <label htmlFor="date">Date:</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              name="date"
              id=""
              placeholder="Date"
            />
          </div>
          <div className="phone">
            <label htmlFor="phone number"> Phone number:</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
              placeholder="Phone number"
            />
          </div>
          <div className="status">
            <label htmlFor="status">Status</label>
            <select onChange={(e) => setStatus(e.target.value)} value={status} name="status" id="">
              <option value="active">active</option>
              <option value="inactive">inactive</option>
              <option value="pending">pending</option>
              <option value="blacklist">blacklist</option>
            </select>
          </div>
          <div className="btns">
            <button onClick={handleReset} className="reset">
              Reset
            </button>
            <button onClick={handleFilter} className="filter">
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
