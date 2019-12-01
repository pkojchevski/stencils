import React from "react";

import { connect } from "react-redux";

import Table from "react-bootstrap/Table";
import { ReactComponent as EditIcon } from "../../assets/icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as StoreIcon } from "../../assets/icons/archive.svg";
import { ReactComponent as StoredIcon } from "../../assets/icons/archived.svg";

import { COLUMN_DATA } from "../../model/szablony";

import { createStructuredSelector } from "reselect";

import {
  selectSzablony,
  selectPage
} from "../../redux/szablon/szablon.selector";
import {
  getSzablon,
  storeSzablonStart,
  getSzablonPageStart
} from "../../redux/szablon/szablon.action";

import { formatDate } from "../../mysql-utils/mysql-utils";
import "./szablon-table.styles.scss";

const SzablonTable = ({
  szablony,
  getSzablon,
  toggleDeleteModal,
  toggleEditModal,
  storeSzablonStart,
  page
}) => {
  const handleEditClick = szablon => {
    if (!szablon.KodSzablonu) return;
    getSzablon({
      ...szablon,
      Data_przyjecia: formatDate(szablon.Data_przyjecia)
    });
    toggleEditModal();
  };

  const handleDeleteClick = szablon => {
    if (!szablon.KodSzablonu) return;
    getSzablon(szablon);
    toggleDeleteModal();
  };

  const handleStoreClick = szablon => {
    if (szablon.storePosition === 1) return;

    storeSzablonStart({ szablon: { ...szablon, storedPosition: true }, page });
  };

  return (
    <div className="szablon-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            {COLUMN_DATA.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {szablony
            ? szablony.map(column => (
                <tr key={column.id}>
                  <td>{column.Nazwa}</td>
                  <td>{column.KodSzablonu}</td>
                  <td>{column.Pozycja}</td>
                  <td>{column.Strona}</td>
                  <td>{column.IndeksPCB}</td>
                  <td>
                    {column.Data_przyjecia
                      ? column.Data_przyjecia.slice(0, 10)
                      : ""}
                  </td>
                  <td>{column.Uwagi}</td>
                  <td>
                    <div className="icons-in-table">
                      <EditIcon
                        onClick={() => handleEditClick(column)}
                        style={{
                          width: "20px",
                          height: "20px",
                          cursor: "pointer"
                        }}
                      />
                    </div>
                  </td>
                  <td>
                    <DeleteIcon
                      onClick={() => handleDeleteClick(column)}
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer"
                      }}
                    />
                  </td>
                  <td>
                    <div>
                      {column.storedPosition === 1 ? (
                        <StoredIcon style={{ width: "20px", height: "20px" }} />
                      ) : (
                        <StoreIcon
                          onClick={() => handleStoreClick(column)}
                          style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer"
                          }}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  szablony: selectSzablony,
  page: selectPage
});

const mapDispatchToProps = dispatch => ({
  getSzablon: szablon => dispatch(getSzablon(szablon)),
  storeSzablonStart: szablon => dispatch(storeSzablonStart(szablon)),
  getSzablonPageStart: page => dispatch(getSzablonPageStart(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(SzablonTable);
