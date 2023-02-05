import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showDetail } from "../../../redux/actions";

const DetailProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const backProduct = () => {
    dispatch(showDetail(false));
    navigate(-1);
  };
  return (
    <div>
      <button type="button" onClick={() => backProduct()}>
        Volver
      </button>
    </div>
  );
};

export default DetailProducts;
