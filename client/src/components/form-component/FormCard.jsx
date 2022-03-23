import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { FormStyles } from "./FormStyles";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { addCard } from "../../redux/features/card";

export const FormCard = () => {
  const classes = FormStyles();
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState({
    number: true,
    cvv: true,
    date: true,
    amount: true,
  });

  const handleChangedNumber = (e) => {
    handleNumber();
    if (e.target.value.length > 16) return;
    setNumber(e.target.value);
  };
  const handleChangedCvv = (e) => {
    handleCvv();
    if (e.target.value.length > 3) return;
    setCvv(e.target.value);
  };
  const handleChangedDate = (e) => {
    handleDate();
    if (e.target.value.length > 10) return;
    setDate(e.target.value);
  };
  const handleChangedAmount = (e) => {
    handleAmount();
    setAmount(e.target.value);
  };

  const handleNumber = () => {
    if (number.length === 12 && Number.isInteger(+number)) {
      return setError({
        ...error,
        number: false,
      });
    }
  };
  const handleCvv = () => {
    if (cvv.length === 3 && Number.isInteger(+number)) {
      return setError({
        ...error,
        cvv: false,
      });
    }
  };
  const handleDate = () => {
    if (date.length === 10 && Number.isInteger(+number)) {
      return setError({
        ...error,
        date: false,
      });
    }
  };
  const handleAmount = () => {
    if (amount.length >= 0 && Number.isInteger(+number)) {
      return setError({
        ...error,
        amount: false,
      });
    } else {
      setError({ ...error, amount: true });
    }
  };

  const disabled = Object.values(error).some((val) => val);
  console.log(disabled);

  const Pay = () => {
    if (number && date && cvv && amount) {
      dispatch(addCard(number, date, cvv, amount));
    }
  };

  console.log(error);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          name="number"
          id="filled-error"
          label="Card Number"
          variant="filled"
          type="number"
          value={number}
          placeholder="0000 0000 0000 0000"
          onChange={handleChangedNumber}
          required={true}
          autoFocus
        />
        <TextField
          name="date"
          id="filled-error-helper-text"
          variant="outlined"
          type="date"
          value={date}
          onChange={handleChangedDate}
          required={true}
        />
      </div>
      <div>
        <TextField
          name="cvv"
          id="outlined-error"
          label="CVV"
          variant="filled"
          value={cvv}
          type="number"
          placeholder="000"
          onChange={handleChangedCvv}
          required={true}
        />
        <TextField
          name="amount"
          id="outlined-error-helper-text"
          label="Amount"
          value={amount}
          variant="filled"
          type="number"
          onChange={handleChangedAmount}
          required={true}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={Pay}
        disabled={disabled}
      >
        Оплатить
      </Button>
    </form>
  );
};
