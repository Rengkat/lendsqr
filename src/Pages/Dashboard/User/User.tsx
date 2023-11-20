import UserSummary from "../../../Components/UserSummary/UserSummary";
import UserTable from "../../../Components/UserTable/UserTable";
import { useGetUsersQuery } from "../../../Redux/Api/UserApi";
import "./style.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToUsers } from "../../../Redux/Features/LoginSlice";

import {
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
} from "react-icons/all";

const User = () => {
  const { data, isFetching } = useGetUsersQuery(undefined);
  const modifiedData = data?.map((response) => ({
    ...response,
    status: "active",
  }));
  const { users } = useSelector((store: any) => store.user);
  // console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToUsers(modifiedData));
  }, [data]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const rowsPerPage = 10;
  const pages = users && Math.ceil(users?.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = users?.slice(startIndex, endIndex);

  return (
    <div>
      <UserSummary />
      <UserTable data={currentData} isFetching={isFetching} />
      <div className="table-nav">
        {/* <div className="select-page-num">
          <label>Showing</label>
          <select name="" id="" className="select">
            <option value="">10</option>
            <option value="">20</option>
            <option value="">30</option>
            <option value="">40</option>
            <option value="">50</option>
            <option value="">60</option>
            <option value="">70</option>
            <option value="">80</option>
            <option value="">90</option>
            <option value="">100</option>
          </select>
          <label htmlFor="">out of 100</label>
        </div> */}
        {!isFetching ? (
          <div className="pagination">
            <button
              style={{ border: "none" }}
              onClick={() => handlePageChange(1)}
              className="pagination__button pagination__button--first"
              disabled={currentPage === 1}>
              <MdOutlineNavigateBefore className="bf-btn" />
            </button>
            {pages
              ? Array.from({ length: pages }, (_, index) => (
                  <button
                    style={{ border: "none", background: "#E5E5E5" }}
                    key={index}
                    onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                ))
              : null}
            <button
              style={{ border: "none" }}
              onClick={() => handlePageChange(pages ? pages : 1)}
              disabled={currentPage === pages}>
              <MdOutlineNavigateNext className="nxt-btn" />
            </button>
          </div>
        ) : (
          ""
        )}

        <div className="pagination"></div>
      </div>
    </div>
  );
};

export default User;
