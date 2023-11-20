import {
  TbMathSymbols,
  CgSortAz,
  BsThreeDotsVertical,
  HiHand,
} from "react-icons/all";
import { useState } from "react";
import Form from "../Form/Form";
import SelectBtn from "../SelectBtn/SelectBtn";
import { useNavigate } from "react-router-dom";
import { UserTableDataType } from "../../Constants/UserTypes";
import "./style.scss";

interface TableProps {
  data: UserTableDataType | undefined;
  isFetching: any;
}

const UserTable = ({ data, isFetching }: TableProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>
              <div className="td">
                <span>organization</span>
                <span>
                  <CgSortAz
                    onClick={() => setIsFormOpen((prev) => !prev)}
                    fontSize={25}
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Username</span>
                <span>
                  <CgSortAz fontSize={25} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Email</span>
                <span>
                  <CgSortAz fontSize={30} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Phone number</span>
                <span>
                  <CgSortAz fontSize={30} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Date Joined</span>
                <span>
                  <CgSortAz fontSize={30} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Status</span>
                <span>
                  <CgSortAz fontSize={30} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td></td>
          </tr>
        </thead>
        {/* ===== onclick disappear=== */}
        {isFormOpen && <Form />}
        {isFetching ? (
          <div
            style={{
              width: "100rem",
              margin: "auto",
              height: "10vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <h1>Loading...</h1>
          </div>
        ) : (
          <>
            <tbody>
              {data?.map((data) => {
                // console.log(data);
                return (
                  <tr key={Math.random()}>
                    <td>{data.orgName}</td>
                    <td>{data.userName}</td>
                    <td>{data.email.slice(0, 12)}</td>
                    <td>{data.phoneNumber.slice(0, 13)}</td>
                    <td>{new Date(data.createdAt).toDateString()}</td>
                    <td>
                      <p
                        className={
                          data.status === "active"
                            ? "active"
                            : data.status === "inactive"
                            ? "inactive"
                            : data.status === "pending"
                            ? "pending"
                            : "blacklist"
                        }>
                        {data.status}
                      </p>
                    </td>
                    <td style={{ position: "relative" }}>
                      <BsThreeDotsVertical
                        onClick={() => navigate(`/${data.id}`)}
                        fontSize={20}
                        style={{ cursor: "pointer" }}
                      />
                      {/* <SelectBtn /> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};

export default UserTable;
