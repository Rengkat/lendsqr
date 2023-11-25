import { BsThreeDotsVertical } from "react-icons/bs";
import { CgSortAz } from "react-icons/cg";
import { Fragment, useState, useContext, useEffect, FormEvent } from "react";
import Form from "../Form/Form";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { AppContext } from "../../Context/AppContext";
import { IoEyeOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { UserType, cleanPhoneNumber, formatDate } from "../../Constants/constants";
interface TableProps {
  modifiedData: UserType[];
}
const heading = ["organization", "username", "email", "phone number", "date joined", "status"];

const UserTable = ({ modifiedData }: TableProps) => {
  const { openDetail, changeUserStatus, closeDetail, loadingUsers } = useContext(AppContext);
  const [openUser, setOpenUser] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  const [orgname, setOrgname] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(modifiedData.length / itemsPerPage);

  // Calculate the indexes for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data for the current page

  const filteredAndPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredData = modifiedData.filter((user: UserType) => {
      const orgnameMatch =
        orgname === "" || user.orgName.toLowerCase().includes(orgname.toLowerCase());
      const usernameMatch = name === "" || user.userName.toLowerCase().includes(name.toLowerCase());
      const emailMatch = email === "" || user.email.toLowerCase().includes(email.toLowerCase());
      const dateMatch = date === "" || new Date(user.createdAt).toLocaleDateString().includes(date);
      const phoneMatch = phone === "" || user.phoneNumber.includes(phone);
      const statusMatch = status === "" || user.status.toLowerCase() === status.toLowerCase();

      return orgnameMatch && usernameMatch && emailMatch && dateMatch && phoneMatch && statusMatch;
    });

    const slicedData = filteredData.slice(startIndex, endIndex);

    return slicedData;
  };

  const handleFilter = (e: FormEvent) => {
    e.preventDefault();
    setIsFormOpen((prev) => !prev);
  };
  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    setOrgname("");
    setName("");
    setEmail("");
    setDate("");
    setPhone("");
    setStatus("");
    setIsFormOpen((prev) => !prev);
  };

  // Update the page when the data or itemsPerPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [modifiedData, itemsPerPage]);

  // get page num in tens
  const pagesInTens = [];

  for (let i = 10; i <= modifiedData.length; i += 10) {
    pagesInTens.push(i);
  }
  // console.log(totalPages);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  // open detail
  const handleClick = (id: string) => {
    openDetail(id);
  };
  // open detail
  const handleClose = (id: string) => {
    closeDetail(id);
  };
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset the current page when items per page changes
  };
  return (
    <div>
      <div className="table-container">
        <table>
          <thead style={{ position: "relative" }}>
            <tr>
              {heading.map((head, index) => (
                <th key={index}>
                  <div className="table-header-cell">
                    <span>{head}</span>
                    <CgSortAz
                      className="icon"
                      onClick={() => setIsFormOpen((prev) => !prev)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          {isFormOpen && (
            <Form
              orgname={orgname}
              setOrgname={setOrgname}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              date={date}
              setDate={setDate}
              phone={phone}
              setPhone={setPhone}
              status={status}
              setStatus={setStatus}
              handleFilter={handleFilter}
              handleReset={handleReset}
            />
          )}
          <tbody>
            {loadingUsers ? (
              <>
                <div
                  style={{
                    width: "100%",
                    height: "50vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                  }}>
                  <div>Loading...</div>
                </div>
              </>
            ) : (
              filteredAndPaginatedData().map((user: UserType) => {
                return (
                  <Fragment key={user.id}>
                    <tr>
                      <td style={{ textTransform: "capitalize" }}>{user.orgName.slice(0, 15)}</td>
                      <td>{user.userName}</td>
                      <td style={{ fontSize: "10px", textTransform: "lowercase" }}>{user.email}</td>
                      <td>{cleanPhoneNumber(user.phoneNumber)}</td>
                      <td>{formatDate(user.createdAt)}</td>
                      <td>
                        <div
                          className={
                            user.status === "active"
                              ? "active"
                              : user.status === "pending"
                              ? "pending"
                              : "blacklist"
                          }>
                          {" "}
                          {user.status}
                        </div>
                      </td>
                      <td style={{ position: "relative" }}>
                        <BsThreeDotsVertical
                          onClick={() => handleClick(user.id)}
                          style={{ cursor: "pointer", position: "relative" }}
                        />
                        {user?.optionOpen && (
                          <div className="box" onClick={(e) => e.stopPropagation()}>
                            <Link
                              onClick={() => handleClose(user.id)}
                              style={{ textDecoration: "none", color: "#545f7d" }}
                              to={`/user/${user.id}`}>
                              <aside>
                                <IoEyeOutline />
                                <p>View Details</p>
                              </aside>
                            </Link>
                            <aside
                              onClick={() => {
                                changeUserStatus(user, "blacklist");
                                handleClose(user.id);
                              }}>
                              <FiUserX />
                              <p>Blacklist User</p>
                            </aside>

                            <aside
                              onClick={() => {
                                changeUserStatus(user, "active");
                                handleClose(user.id);
                              }}>
                              <FiUserCheck />
                              <p>Activate User</p>
                            </aside>
                          </div>
                        )}
                      </td>
                    </tr>
                  </Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <div className="select">
          <span>Showing </span>
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}>
            {pagesInTens.map((page, index) => {
              return <option key={index}>{page}</option>;
            })}
          </select>
          <span style={{ padding: "0 0.5rem" }}>out of {modifiedData.length}</span>
        </div>
        <div className="right-p">
          <button
            className="p-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}>
            <IoIosArrowBack />
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;

            return (
              <Fragment key={index}>
                <aside
                  style={{
                    color: `${index === currentPage ? "#1c1e22" : "#95a0bd"}`,
                    cursor: "pointer",
                  }}
                  onClick={() => setCurrentPage(index)}>
                  {page}
                </aside>
              </Fragment>
            );
          })}

          <button
            className="p-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
